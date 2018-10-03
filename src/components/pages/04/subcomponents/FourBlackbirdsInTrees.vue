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
      <a class="button"
         v-on:click="AddToBlackbirdsList">
        look
      </a>
    </div>
    <div class="column is-4 is-offset-2">
      <p v-for="(blackbird, index) in blackbirdsList"
         v-bind:key="index">
        {{ blackbird }}
      </p>
    </div>
    <div class="column is-4">
      <p v-for="(blackbird, index) in blackbirdsListFiltered"
         v-bind:key="index">
        {{ blackbird }}
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
      return this.blackbirdsList.filter(e => e.split(' ')[0] % 2 === 0);
    },
  },
  methods: {
    AddToBlackbirdsList() {
      const newNum = Math.floor(Math.random() * 10);
      let newBlackbirds = `${newNum} blackbird`;
      if (newNum !== 1) {
        newBlackbirds += 's';
      }
      this.blackbirdsList.push(newBlackbirds);
    },
  },
};
</script>

<style>

</style>
