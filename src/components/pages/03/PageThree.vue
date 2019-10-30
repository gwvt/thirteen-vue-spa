<template>
<div>
  <div>
    <h3 class="title is-3 sub-heading">
      There were {{ birdsInAllFlocks }} blackbirds in all.
    </h3>
  </div>
  <div class="columns">
    <div class="column is-4"
         v-for="flock in flocks"
         v-bind:key="flock.setting"> <!-- ∆5 -->
      <three-flock v-bind:flock="flock" /> <!-- ∆3, ∆4 -->
    </div>
  </div>
</div>
</template>

<script>
import ThreeFlock from './subcomponents/ThreeFlock.vue'; // ∆1

export default {
  name: 'PageThree',
  components: { // ∆2
    ThreeFlock,
  },
  data() {
    return { // ∆6
      flocks: [
        {
          setting: 'in the autumn',
          birds: this.generateBirdsInFlock(),
        },
        {
          setting: 'walking',
          birds: this.generateBirdsInFlock(),
        },
        {
          setting: 'in the cedar-limbs',
          birds: this.generateBirdsInFlock(),
        },
      ],
    };
  },
  computed: {
    birdsInAllFlocks() {
      return this.flocks
        .reduce((sum, { birds }) => sum + birds, 0);
    },
  },
  methods: {
    generateBirdsInFlock() {
      return Math.floor((Math.random() * 6) + 1);
    },
  },
};
</script>

<style>
</style>
