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
import FourSnowyMountains from './subcomponents/FourSnowyMountains.vue';
import FourMovingThings from './subcomponents/FourMovingThings.vue';
import FourBlackbirdsInTrees from './subcomponents/FourBlackbirdsInTrees.vue';
import FourBlackbirdFlew from './subcomponents/FourBlackbirdFlew.vue';
import FourIKnow from './subcomponents/FourIKnow.vue';
import FourHeRode from './subcomponents/FourHeRode.vue';

export default {
  id: 'PageFour',
  components: {
    FourSnowyMountains,
    FourMovingThings,
    FourBlackbirdsInTrees,
    FourBlackbirdFlew,
    FourIKnow,
    FourHeRode,
  },
  data() {
    return {
      tabs: [
        {
          id: 1,
          display: 'Snowy Mountains',
          component: FourSnowyMountains,
        },
        {
          id: 2,
          display: 'Moving Things',
          component: FourMovingThings,
        },
        {
          id: 3,
          display: 'Blackbirds in Trees',
          component: FourBlackbirdsInTrees,
        },
        {
          id: 4,
          display: 'Blackbird Flew',
          component: FourBlackbirdFlew,
        },
        {
          id: 5,
          display: 'I Know',
          component: FourIKnow,
        },
        {
          id: 6,
          display: 'He Rode',
          component: FourHeRode,
        },
      ],
      activeTabId: 1,
      activeComponent: FourSnowyMountains,
    };
  },
  computed: {
    tabClasses() {
      const classes = {};
      this.tabs.forEach((t) => {
        classes[t.id] = {
          'is-active': this.activeTabId === t.id,
        };
      });
      return classes;
    },
  },
  methods: {
    activateTab(tab) {
      this.activeTabId = tab.id;
      this.activeComponent = tab.component;
    },
  },
};
</script>

<style>
</style>
