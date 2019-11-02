<template>
<nav class="menu">
  <ul class="menu-list">
    <li class="menu-item"
        v-for="path in paths"
        v-bind:key="path">
      <router-link v-bind:to="path">
        {{ formatForNav(path) }}
      </router-link> <!-- ∆1 -->
    </li>
    <li class="menu-item">
      <a v-bind:href="standaloneURL">
        Thirteen
      </a>
    </li>
  </ul>
</nav>
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
    paths() {
      return this.$router.options.routes
        .filter(r => r.path !== '/error')
        .filter(r => !r.redirect)
        .filter(r => r.path.split('/').length < 3)
        .map(r => r.path);
    },
  },
  methods: {
    formatForNav(path) {
      return path.charAt(1).toUpperCase() + path.slice(2);
    },
  },
};
</script>

<style>
</style>
