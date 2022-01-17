import { createRouter, createWebHashHistory } from 'vue-router';
import state from '../store/state';
import Home from '../views/Home.vue';
import Show from '../views/Show.vue';
import Filmography from '../views/Filmography.vue';
import Log from '../views/Log.vue';
import Signup from '../views/Signup.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/shows/:id',
    name: 'Show',
    component: Show,
    props: true
  },
  {
    path: '/filmography',
    name: 'Filmography',
    component: Filmography,
    meta: { requiresAuth: true },
    children: [
      {
        path: '/filmography/:id',
        name: 'Movie'
      }
    ]
  },
  {
    path: '/log',
    name: 'Log',
    component: Log
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    beforeEnter: (to, from, next) => {
      if (state.userLogged) {
        next('/filmography');
      } else {
        next();
      }
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Home',
    component: Home
  },
  {
    path: '/:pathMatch(.*)',
    name: 'Home',
    component: Home
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((route) => route.meta.requiresAuth)) {
    if (!state.userLogged) {
      next('/log');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
