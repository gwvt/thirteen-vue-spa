<template>
<div>
  <four-sub-heading>
    He rode with
  </four-sub-heading>
  <div class="columns">
    <div class="column is-2">
      <div class="vertical-buttons"
           v-for="button in buttons"
           v-bind:key="button.display">
        <button class="button"
           v-on:click="button.callback">
          {{ button.display }}
        </button>
      </div>
    </div>
    <div class="column is-4 is-offset-2">
      <div v-for="(value, key) in rodeWith"
           v-bind:key="key">
        <p>
          {{ key }}: {{ value }}
        </p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import FourSubHeading from './FourSubHeading.vue';

export default {
  name: 'SubF',
  components: {
    FourSubHeading,
  },
  data() {
    return {
      buttons: [
        {
          callback: this.addCoaches,
          display: 'coach',
        },
        {
          callback: this.addFears,
          display: 'fear',
        },
        {
          callback: this.addShadows,
          display: 'shadow',
        },
      ],
      rodeWith: { // ∆1
        coaches: 1,
      },
    };
  },
  methods: {
    addCoaches() { // ∆2, ∆5
      this.rodeWith.coaches += 1;
    },
    addFears() { // ∆3
      if (!this.rodeWith.fears) {
        this.rodeWith.fears = 1;
      } else {
        this.rodeWith.fears += 1;
      }
    },
    addShadows() { // ∆4
      if (!this.rodeWith.shadows) {
        this.rodeWith = {
          shadows: this.rodeWith.coaches + 1,
          fears: this.rodeWith.fears,
        };
      } else {
        this.rodeWith.shadows += 1;
      }
    },
  },
};
</script>

<style>
</style>
