<template>
<div>
  <ten-sub-heading>
    Among
  </ten-sub-heading>
  <div class="columns">
    <div class="column is-2">
      <button class="button"
         v-on:click="addBy('mountains', 10)"> <!-- ∆3 -->
        more
      </button>
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
import { utilities } from '@/mixins'; // ∆1
import TenSubHeading from './TenSubHeading.vue';

export default {
  name: 'SnowyMountains',
  mixins: [utilities], // ∆2
  components: {
    TenSubHeading,
  },
  data() {
    return {
      mountains: 20,
    };
  },
};
</script>

<style>
</style>
