<template>
<div class="page-header">
  <h3 class="title is-3">
      {{ routeName }}
  </h3>
  <h4 class="title is-4">
    {{ pageTitles[routeName] }}
  </h4>
</div>
</template>

<script>
export default {
  name: 'PageHeader',
  data() {
    return {
      pageTitles: {
        one: 'create a component',
        two: 'generate content',
        three: 'reuse components',
        four: 'manipulate data',
        five: 'control styling',
        six: 'interact with user input',
        seven: 'manage state',
        eight: 'add routing',
        nine: 'inspect and debug',
        ten: 'reuse functionalities',
        eleven: 'use open-source libraries',
        twelve: 'start a vue project',
        flock: 'view',
      },
    };
  },
  computed: {
    routeName() {
      return this.$route.name || this.$route.path.slice(1);
    },
  },
};
</script>

<style>
</style>
