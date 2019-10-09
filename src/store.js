import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    flocks: [
      {
        id: '1',
        setting: 'in the autumn',
        birds: 1,
      },
      {
        id: '2',
        setting: 'walking',
        birds: 1,
      },
      {
        id: '3',
        setting: 'in the cedar-limbs',
        birds: 1,
      },
    ],
  },
  getters: {
    birdsInAllFlocks(state) {
      const summed = state.flocks.reduce((sum, { birds }) => sum + birds, 0);
      return summed;
    },
  },
  mutations: {
    changeBirdsInFlock(state, payload) {
      const flock = state.flocks.find(f => f.id === payload.flockId);
      if (flock.birds + payload.operand > 0 && flock.birds + payload.operand < 7) {
        flock.birds += payload.operand;
      }
    },
  },
});
