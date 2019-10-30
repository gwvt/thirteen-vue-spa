<template>
<div class="has-text-centered">
  <h4 class="title is-4 sub-heading">
    {{ flock.setting }}
  </h4>
  <h5 class="title is-5"
      v-html="birdsInFlockText" />
  <seven-change-birds-buttons v-bind:flock="flock" />
  <div class="columns is-multiline page-mode-flock">
    <div class="column is-4"
         v-for="n in flock.birds"
         v-bind:key="n">
      <img src="@/assets/img/blackbird.png"
           title="blackbird"
           alt="a silhouette of a blackbird" />
    </div>
  </div>
</div>
</template>

<script>
import SevenChangeBirdsButtons from './SevenChangeBirdsButtons.vue';

export default {
  name: 'SevenFlock',
  components: {
    SevenChangeBirdsButtons,
  },
  props: {
    flock: {
      type: Object,
      required: true,
      validator(prop) {
        return prop.birds > 0 && prop.birds < 7;
      },
    },
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
  },
};
</script>

<style>

</style>
