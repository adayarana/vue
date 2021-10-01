import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Filmography from '../views/Filmography.vue';

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
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
