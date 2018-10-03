<template>
<div class="columns">
  <div class="column is-6 is-offset-4">
    <div class="has-text-centered vertical-repeating narrow"
         v-for="n in 3"
         v-bind:key="n">
      <h4 class="title is-4">
        {{ `Bird ${n}` }}
      </h4>
      <div class="vertical-spacing">
        <img src="@/assets/img/blackbird.png"
             v-bind:title="`${ordinals[n - 1]} of three blackbirds`"
             alt="a silhouette of a blackbird"
             v-if="n !== hide" />
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
  beforeMount() {
    this.hideNext();
  },
  methods: {
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
