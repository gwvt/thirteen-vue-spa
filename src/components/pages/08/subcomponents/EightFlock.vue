<template>
<div class="has-text-centered">
  <h4 class="title is-4 sub-heading">
    {{ flock.setting }}
  </h4>
  <h5 class="title is-5"
      v-html="birdsInFlockText" />
  <eight-change-birds-buttons v-bind:flock="flock"
                              v-bind:viewMode="viewMode" />
  <div class="columns is-multiline"
       :class="flockClassObj">
    <div class="column is-4"
         v-for="n in flock.birds"
         v-bind:key="n">
      <img src="@/assets/img/blackbird.png"
           title="blackbird"
           alt="a silhouette of a blackbird" />
      <p v-if="viewMode === 'flock'">
        {{ ordinals[n - 1] }} bird {{ flock.setting }}
      </p>
    </div>
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
      ordinals: ['first', 'second', 'third', 'fourth', 'fifth', 'sixth'],
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
      return `There ${wasOrWere} ${this.flock.birds}<br />blackbird${pluralEnding}.`;
    },
    flockClassObj() {
      return {
        'page-mode-flock': this.viewMode === 'page',
        'flock-mode-flock': this.viewMode === 'flock',
      };
    },
  },
};
</script>

<style>
.page-mode-flock {
  padding: 2rem 1.5rem 0 1.5rem;
}

.flock-mode-flock {
  padding: 2rem 12rem 0 12rem;
}
</style>
