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
         v-bind:key="flock.setting">
      <three-flock v-bind:flock="flock" />
    </div>
  </div>
</div>
</template>

<script>
import ThreeFlock from './subcomponents/ThreeFlock.vue';

export default {
  name: 'PageThree',
  components: {
    ThreeFlock,
  },
  data() {
    return {
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
      return this.flocks.reduce((sum, { birds }) => sum + birds, 0);
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
