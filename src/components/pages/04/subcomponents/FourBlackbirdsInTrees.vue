<template>
<div>
  <four-sub-heading>
      in one tree
    <template slot="right">
      in another tree
    </template>
  </four-sub-heading>
  <div class="columns">
    <div class="column is-2">
      <button class="button"
         v-on:click="addToBlackbirdsList">
        look
      </button>
    </div>
    <div class="column is-4 is-offset-2">
      <p v-for="(number, index) in blackbirdsList"
         v-bind:key="index">
        {{ formatBlackbirds(number) }}
      </p>
    </div>
    <div class="column is-4">
      <p v-for="(number, index) in blackbirdsListFiltered"
         v-bind:key="index"> <!-- ∆2 -->
        {{ formatBlackbirds(number) }} <!-- ∆3 -->
      </p>
    </div>
  </div>
</div>
</template>

<script>
import FourSubHeading from './FourSubHeading.vue';

export default {
  name: 'BlackbirdsInTrees',
  components: {
    FourSubHeading,
  },
  data() {
    return {
      blackbirdsList: [],
    };
  },
  computed: {
    blackbirdsListFiltered() {
      return this.blackbirdsList
        .filter(n => n % 2 === 0); // ∆1
    },
  },
  methods: {
    addToBlackbirdsList() {
      const number = Math.floor(Math.random() * 10);

      this.blackbirdsList.push(number);
    },
    formatBlackbirds(number) {
      let formatted = `${number} blackbird`;

      if (number !== 1) {
        formatted += 's';
      }

      return formatted;
    },
  },
};
</script>

<style>
</style>
