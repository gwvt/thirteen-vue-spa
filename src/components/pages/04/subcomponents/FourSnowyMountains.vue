<template>
<div>
  <four-sub-heading>
    Among
  </four-sub-heading>
  <div class="columns">
    <div class="column is-2">
      <button class="button"
         v-on:click="addMountains"> <!-- ∆3 -->
        more
      </button>
    </div>
    <div class="column is-4 is-offset-2">
      <p>
        {{ mountains }} snowy mountains <!-- ∆4 -->
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
      mountains: 20, // ∆1
    };
  },
  methods: {
    addMountains() { // ∆2
      this.mountains += 10;
    },
  },
};
</script>

<style>

</style>
