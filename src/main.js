import Vue from 'vue';
import AudioVisual from 'vue-audio-visual'; // ∆1

import router from './router';
import store from './store';

import App from './App.vue';

Vue.config.productionTip = true;
Vue.config.devtools = true;

Vue.use(AudioVisual); // ∆2

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
