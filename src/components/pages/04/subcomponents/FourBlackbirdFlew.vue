<template>
<div>
  <four-sub-heading>
    The blackbird
  </four-sub-heading>
  <div class="columns">
    <div class="column is-2">
      <button class="button"
         v-on:click="toggleFlown">
        flew
      </button>
    </div>
    <div class="column is-6 is-offset-2">
      <p>
        {{ nowWithBlackbird }}
      </p>
      <p>
        {{ nowWithoutBlackbird }}
      </p>
    </div>
  </div>
</div>
</template>

<script>
import FourSubHeading from './FourSubHeading.vue';

export default {
  name: 'BlackBirdFlew',
  components: {
    FourSubHeading,
  },
  data() {
    return {
      flown: false,
    };
  },
  computed: {
    nowWithBlackbird() { // ∆1
      const timeString = new Date().toLocaleTimeString();
      let phrase = `It was ${timeString}.`;

      if (this.flown) {
        phrase += ' The blackbird flew out of sight.';
      }

      return phrase;
    },
    nowWithoutBlackbird() { // ∆2
      const timeString = new Date().toLocaleTimeString();
      const phrase = `It was ${timeString}.`;

      return phrase;
    },
  },
  methods: {
    toggleFlown() { // ∆3
      this.flown = !this.flown;
    },
  },
};
</script>

<style>

</style>
