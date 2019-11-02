<template>
  <div class="columns button-row">
    <div class="column is-4"
         v-if="viewMode === 'page'">
      <button class="button is-primary"
         v-on:click="viewFlock(flock.id)">
        View
      </button>
    </div>
    <div class="column"
         v-for="button in buttons"
         v-bind:key="button.name">
      <button class="button"
         v-bind:disabled="disabled(button.name)"
         v-on:click="changeBirdsInFlock(flock.id, button.operand)">
        {{ button.display }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EightChangeBirdsButtons',
  props: {
    flock: {
      type: Object,
      required: true,
    },
    viewMode: {
      type: String,
      required: true,
      validator(value) {
        return ['page', 'flock'].includes(value);
      },
    },
  },
  data() {
    return {
      buttons: [
        {
          name: 'minus',
          display: '⬇',
          operand: -1,
        },
        {
          name: 'plus',
          display: '⬆',
          operand: 1,
        },
      ],
    };
  },
  methods: {
    changeBirdsInFlock(flockId, operand) {
      this.$store.commit('changeBirdsInFlock', {
        flockId,
        operand,
      });
    },
    disabled(buttonName) {
      const disabled = {
        minus: this.flock.birds === 1,
        plus: this.flock.birds === 6,
      };

      return disabled[buttonName];
    },
    viewFlock(flockId) {
      const flockIdString = flockId.toString();

      this.$router.push({ // ∆1
        name: 'flock',
        params: {
          flockId: flockIdString,
        },
      });
    },
  },
};
</script>

<style>
</style>
