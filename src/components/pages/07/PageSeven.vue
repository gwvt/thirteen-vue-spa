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
        <seven-change-birds-buttons
          v-bind:flock="flock"
          v-bind:key="flock.id" />
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
      <seven-flock v-bind:flock="flock" />
    </div>
  </div>
</div>
</template>

<script>
import SevenFlock from './subcomponents/SevenFlock.vue';
import SevenChangeBirdsButtons from './subcomponents/SevenChangeBirdsButtons.vue';

export default {
  name: 'PageSeven',
  components: {
    SevenFlock,
    SevenChangeBirdsButtons,
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
