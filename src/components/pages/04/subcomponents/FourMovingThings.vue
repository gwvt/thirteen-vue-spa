<template>
<div>
  <four-sub-heading>
    I saw
  </four-sub-heading>
  <div class="columns">
    <div class="column is-2">
      <a class="button"
         v-bind:disabled="minusButtonDisabled"
         v-on:click="changeMovingThings(-1)">
        fewer
      </a>
    </div>
    <div class="column is-2">
      <a class="button"
         v-on:click="changeMovingThings(1)">
        more
      </a>
    </div>
    <div class="column is-4">
      <p>
        {{ phrase }} <!-- ∆3  -->
      </p>
    </div>
  </div>
</div>
</template>

<script>
import FourSubHeading from './FourSubHeading.vue';

export default {
  name: 'MovingThings',
  components: {
    FourSubHeading,
  },
  data() {
    return {
      movingThings: 1,
    };
  },
  computed: {
    phrase() { // ∆1
      let phrase = '';
      if (this.movingThings === 1) { // ∆2
        phrase = 'the only moving thing';
      } else if (this.movingThings < 1) {
        phrase = 'no moving things';
      } else {
        phrase = `${this.movingThings} moving things`;
      }
      return phrase;
    },
    minusButtonDisabled() {
      return this.movingThings === 0;
    },
  },
  methods: {
    changeMovingThings(changeBy) {
      if (!(this.movingThings === 0 && changeBy === -1)) {
        this.movingThings += changeBy;
      }
    },
  },
};
</script>

<style>

</style>
