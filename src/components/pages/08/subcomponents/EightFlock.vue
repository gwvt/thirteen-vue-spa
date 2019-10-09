<template>
<div class="has-text-centered">
  <h4 class="title is-4 sub-heading">
    {{ flock.setting }}
  </h4>
  <h5 class="title is-5">
    {{ birdsInFlockText }}
  </h5>
  <eight-change-birds-buttons
    v-bind:flock="flock"
    v-bind:viewMode="viewMode" />
  <div v-for="n in flock.birds"
       v-bind:key="n">
    <img class="vertical-repeating narrow"
         src="@/assets/img/blackbird.png"
         title="blackbird"
         alt="a silhouette of a blackbird" />
    <p v-if="viewMode === 'flock'">
      {{ ordinals[n - 1] }} bird {{ flock.setting }}
    </p>
  </div>
</div>
</template>

<script>
import EightChangeBirdsButtons from './EightChangeBirdsButtons.vue';

export default {
  name: 'EightFlock',
  components: {
    EightChangeBirdsButtons,
  },
  props: {
    flock: {
      type: Object,
      required: true,
      validator(prop) {
        return prop.birds > 0 && prop.birds < 7;
      },
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
      ordinals: ['first', 'second', 'third', 'fourth', 'fifth'],
    };
  },
  computed: {
    birdsInFlockText() {
      let wasOrWere = 'was';
      let pluralEnding = '';
      if (this.flock.birds > 1) {
        wasOrWere = 'were';
        pluralEnding = 's';
      }
      return `There ${wasOrWere} ${this.flock.birds} blackbird${pluralEnding}.`;
    },
  },
};
</script>

<style>
</style>
