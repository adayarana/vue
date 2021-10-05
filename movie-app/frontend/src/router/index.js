import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
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
    path: '/filmography',
    name: 'Filmography',
    component: Filmography
  },
  {
    path: '/log',
    name: 'Log',
    component: Log
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
