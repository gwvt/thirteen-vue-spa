<template>
<div>
  <four-sub-heading>
    Among
  </four-sub-heading>
  <div class="columns">
    <div class="column is-2">
      <a class="button"
         v-on:click="addMountain">
        more
      </a>
    </div>
    <div class="column is-4 is-offset-2">
      <p>
        {{ mountains }} snowy mountains
      </p>
    </div>
  </div>
</div>
</template>

<script>
import FourSubHeading from './FourSubHeading.vue';

export default {
  name: 'SnowyMountains',
  components: {
    FourSubHeading,
  },
  data() {
    return {
      mountains: 20,
    };
  },
  methods: {
    addMountain() {
      this.mountains += 10;
    },
  },
};
</script>

<style>

</style>
