<template>
<aside class="menu">
  <ul class="menu-list">
    <li class="menu-item"
        v-for="path in routePaths"
        v-bind:key="path">
      <router-link v-bind:to="path">
        {{ path | formatForNav }}
      </router-link>
    </li>
    <li>
      <a v-bind:href="standaloneURL">
        Thirteen
      </a>
    </li>
  </ul>
</aside>
</template>

<script>
export default {
  name: 'SideNav',
  data() {
    return {
      standaloneURL: `http://${process.env.VUE_APP_STANDALONE_URL}`,
    };
  },
  computed: {
    routePaths() {
      return this.$router.options.routes.filter(r => r.path !== '/error').filter(r => !r.redirect).filter(r => r.path.split('/').length < 3).map(r => r.path);
    },
  },
  filters: {
    formatForNav(path) {
      let formatted = '';
      if (typeof path === 'string') {
        formatted = `${path.charAt(1).toUpperCase()}${path.slice(2)}`;
      }
      return formatted;
    },
  },
};
</script>

<style>
</style>
