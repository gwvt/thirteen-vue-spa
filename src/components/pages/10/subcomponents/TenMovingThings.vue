<template>
<div>
  <ten-sub-heading>
    I saw
  </ten-sub-heading>
  <div class="columns">
    <div class="column is-2">
      <button class="button"
         v-bind:disabled="disableButton('movingThings', 0)"
         v-on:click="addBy('movingThings', -1, 0)"> <!-- ∆1 -->
        fewer
      </button>
    </div>
    <div class="column is-2">
      <button class="button"
         v-on:click="addBy('movingThings', 1)">
        more
      </button>
    </div>
    <div class="column is-4">
      <p>
        {{ phrase }}
      </p>
    </div>
  </div>
</div>
</template>

<script>
import { utilities } from '@/mixins';
import TenSubHeading from './TenSubHeading.vue';

export default {
  name: 'MovingThings',
  components: {
    TenSubHeading,
  },
  mixins: [utilities],
  data() {
    return {
      movingThings: 1,
    };
  },
  computed: {
    phrase() {
      let phrase = '';

      if (this.movingThings === 1) {
        phrase = 'the only moving thing';
      } else if (this.movingThings < 1) {
        phrase = 'no moving things';
      } else {
        phrase = `${this.movingThings} moving things`;
      }

      return phrase;
    },
  },
};
</script>

<style>
</style>
