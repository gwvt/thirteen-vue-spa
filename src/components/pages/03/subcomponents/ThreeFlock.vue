<template>
<div class="has-text-centered">
  <h4 class="title is-4 sub-heading">
    {{ flock.setting }}
  </h4>
  <h5 class="title is-5 sub-heading">
    {{ birdsInFlockText }}
  </h5>
  <div class="columns is-multiline padded-content">
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
export default {
  name: 'Flock',
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
      return `There ${wasOrWere} ${this.flock.birds} blackbird${pluralEnding}.`;
    },
  },
};
</script>

<style>
</style>
