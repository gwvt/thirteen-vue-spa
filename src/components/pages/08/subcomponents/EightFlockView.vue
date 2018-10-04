<template>
<div>
  <div class="columns">
    <div class="column is-2 page-section">
      <a class="button is-primary"
         v-on:click="goBack">
        Go back
      </a>
    </div>
  </div>
  <eight-flock v-if="flock"
               v-bind:flock="flock"
               viewMode="flock" />
</div>
</template>

<script>
import EightFlock from './EightFlock.vue';

export default {
  name: 'EightFlockView',
  components: {
    EightFlock,
  },
  props: {
    flockId: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      flock: null,
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
  created() {
    const flockIdNumber = parseInt(this.flockId, 10);
    this.flock = this.$store.state.flocks
      .find(flock => flock.id === flockIdNumber);
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.img-wrapper {
  margin: 2rem;
  padding: 1rem;
  height: 14rem;
}
</style>
