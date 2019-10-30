<template>
  <div class="columns button-row">
    <div class="column is-6"
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
  name: 'SevenChangeBirdsButtons',
  props: {
    flock: {
      type: Object,
      required: true,
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
  },
};
</script>

<style>
</style>
