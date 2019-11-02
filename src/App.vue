<template>
<div class="columns app"
     id="app">
  <div class="column is-2 side">
    <side-nav /> <!-- ∆1 -->
  </div>
  <div class="column is-10 main">
    <page-header />
    <router-view v-bind:key="$route.path" /> <!-- ∆2 -->
  </div>
</div>
</template>

<script>
import SideNav from '@/components/common/SideNav.vue';
import PageHeader from '@/components/common/PageHeader.vue';

export default {
  name: 'App',
  components: {
    SideNav,
    PageHeader,
  },
};
</script>

<style>
.app {
  margin: 2rem 1rem 1rem 1rem;
}

.side {
  margin: 6rem 0 0 0;
}

.button {
  width: 100%;
}

.page-header {
  margin: 0 0 4rem 0;
}

.page-section {
  padding-bottom: 2rem;
}

.sub-heading {
  height: 4rem;
}

.vertical-buttons {
  margin-top: 1rem;
}

.button-row {
  height: 3rem;
}

.page-mode-flock {
  padding: 2rem 1.5rem 0 1.5rem;
}

.flock-mode-flock {
  padding: 2rem 12rem 0 12rem;
}
</style>
