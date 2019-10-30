<template>
<div>
  <div class="columns">
    <div class="column is-12">
      <div class="tabs">
        <ul>
          <template v-for="tab in tabs">
            <li v-bind:class="tabClasses[tab.id]"
                v-bind:key="tab.id">
              <a v-on:click="activateTab(tab)">
                {{ tab.display }}
              </a>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>
  <component v-bind:is="activeComponent" />
</div>
</template>

<script>
import TenSnowyMountains from './subcomponents/TenSnowyMountains.vue';
import TenMovingThings from './subcomponents/TenMovingThings.vue';

export default {
  name: 'PageTen',
  components: {
    TenSnowyMountains,
    TenMovingThings,
  },
  data() {
    return {
      tabs: [
        {
          id: 1,
          display: 'Snowy Mountains',
          component: TenSnowyMountains,
        },
        {
          id: 2,
          display: 'Moving Things',
          component: TenMovingThings,
        },
      ],
      activeTabId: 1,
      activeComponent: TenSnowyMountains,
    };
  },
  computed: {
    tabClasses() {
      const classes = {};

      this.tabs.forEach((t) => {
        classes[t.id] = {
          'is-active': this.activeTabName === t.id,
        };
      });

      return classes;
    },
  },
  methods: {
    activateTab(tab) {
      this.activeTabName = tab.id;
      this.activeComponent = tab.component;
    },
  },
};
</script>

<style>
</style>
