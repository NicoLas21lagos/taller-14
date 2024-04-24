import { createRouter, createWebHistory } from 'vue-router';
import HomeUser from '@/components/HomeUser.vue';
import DatosUser from '@/components/DatosUser.vue';
import InterfazUser from '@/components/InterfazUser.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeUser
  },
  {
    path: '/about',
    name: 'About',
    component:DatosUser
  },
  {
    path: '/a',
    name: 'Inter',
    component : InterfazUser
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
