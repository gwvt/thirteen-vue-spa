import Vue from 'vue';
import Router from 'vue-router';
import store from './store';

import PageOne from '@/components/pages/01/PageOne.vue';
import PageTwo from '@/components/pages/02/PageTwo.vue';
import PageThree from '@/components/pages/03/PageThree.vue';
import PageFour from '@/components/pages/04/PageFour.vue';
import PageFive from '@/components/pages/05/PageFive.vue';
import PageSix from '@/components/pages/06/PageSix.vue';
import PageSeven from '@/components/pages/07/PageSeven.vue';
import PageEight from '@/components/pages/08/PageEight.vue';
import EightFlockView from '@/components/pages/08/subcomponents/EightFlockView.vue';
import PageNine from '@/components/pages/09/PageNine.vue';
import PageTen from '@/components/pages/10/PageTen.vue';
import PageEleven from '@/components/pages/11/PageEleven.vue';
import PageTwelve from '@/components/pages/12/PageTwelve.vue';
import Error from '@/components/common/Error.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/one',
      component: PageOne,
    },
    {
      path: '/two',
      component: PageTwo,
    },
    {
      path: '/three',
      component: PageThree,
    },
    {
      path: '/four',
      component: PageFour,
    },
    {
      path: '/five',
      component: PageFive,
    },
    {
      path: '/six',
      component: PageSix,
    },
    {
      path: '/seven',
      component: PageSeven,
    },
    {
      path: '/eight',
      component: PageEight,
    },
    {
      path: '/nine',
      component: PageNine,
    },
    {
      path: '/ten',
      component: PageTen,
    },
    {
      path: '/eleven',
      component: PageEleven,
    },
    {
      path: '/twelve',
      component: PageTwelve,
    },
    {
      path: '/',
      redirect: {
        path: '/one',
      },
    },
    {
      path: '/eight/flock/:flockId',
      name: 'flock',
      component: EightFlockView,
      props: true,
    },
    {
      path: '/error',
      component: Error,
    },
    {
      path: '*',
      redirect: {
        path: '/error',
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const validFlockId = store.state.flocks
    .map(flock => flock.id)
    .includes(to.params.flockId);
  if (to.name === 'flock' && !validFlockId) {
    next({ path: '/eight' });
  } else {
    next();
  }
});

export default router;
