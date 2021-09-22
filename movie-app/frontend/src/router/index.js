import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Filmography from '../views/Filmography.vue';
import About from '../views/About.vue';

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
    path: '/about',
    name: 'About',
    component: About
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
