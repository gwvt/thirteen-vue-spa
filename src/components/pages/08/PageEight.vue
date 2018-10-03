<template>
<div>
  <div>
    <h3 class="title is-3 sub-heading">
      There were {{ birdsInAllFlocks }} blackbirds in all.
    </h3>
  </div>
  <div class="columns">
    <div class="column is-4">
      <template v-for="flock in flocks">
        <eight-change-birds-buttons
          v-bind:flock="flock"
          v-bind:key="flock.id"
          viewMode="page" />
      </template>
    </div>
    <div class="column is-6">
      <div class="button-row"
           v-for="flock in flocks"
           v-bind:key="flock.id">
         {{ flock.birds }} {{ flock.setting }}
      </div>
    </div>
  </div>
  <div class="columns">
    <div class="column is-4"
         v-for="flock in flocks"
         v-bind:key="flock.id">
      <eight-flock v-bind:flock="flock"
                   viewMode="page" />
    </div>
  </div>
</div>
</template>

<script>
import EightFlock from './subcomponents/EightFlock.vue';
import EightChangeBirdsButtons from './subcomponents/EightChangeBirdsButtons.vue';

export default {
  name: 'PageEight',
  components: {
    EightFlock,
    EightChangeBirdsButtons,
  },
  computed: {
    flocks() {
      return this.$store.state.flocks;
    },
    birdsInAllFlocks() {
      return this.$store.getters.birdsInAllFlocks;
    },
  },
};
</script>

<style>
</style>
