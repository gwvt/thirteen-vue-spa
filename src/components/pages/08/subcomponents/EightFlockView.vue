<template>
<div>
  <div class="columns">
    <div class="column is-2 page-section">
      <button class="button is-primary"
         v-on:click="goBack">
        Go back
      </button>
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
    this.flock = this.$store.state.flocks // ∆1
      .find(flock => flock.id === this.$route.params.flockId);
  },
  methods: {
    goBack() {
      this.$router.push({ path: '/eight' });
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
