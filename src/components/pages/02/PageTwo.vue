<template>
<div class="columns">
  <div class="column is-8">
    <h4 class="title is-4">
      There were {{ birdsShowing }} blackbirds. <!-- ∆7 -->
    </h4>
    <div class="columns">
      <div class="column is-4 has-text-centered"
           v-for="n in 3"
           v-bind:key="n"> <!-- ∆1 -->
        <h4 class="title is-4">
          {{ `Bird ${n}` }} <!-- ∆2 -->
        </h4>
        <div class="vertical-spacing">
          <img src="@/assets/img/blackbird.png"
               v-bind:title="`${ordinals[n - 1]} of three blackbirds`"
               alt="a silhouette of a blackbird"
               v-if="n !== hide" /> <!-- ∆3 -->
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'PageTwo',
  data() {
    return {
      hide: -1,
      ordinals: ['first', 'second', 'third'],
    };
  },
  beforeMount() { // ∆5
    this.hideNext();
  },
  computed: { // ∆6
    birdsShowing() {
      return !this.hide ? 'three' : 'two';
    },
  },
  methods: { // ∆4
    hideNext() {
      if (this.hide < 3) {
        this.hide += 1;
      } else {
        this.hide = 0;
      }
      setTimeout(this.hideNext, 1500);
    },
  },
};
</script>

<style>
</style>
