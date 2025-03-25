import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',

      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/anys',
      name: 'anys',

      component: () => import('../views/YearsView.vue'),
    },
    {
      path: '/detall_any/:anyDetall',
      name: 'anyDetall',

      component: () => import('../views/AnyDetallView.vue'),
    },
  ],
})

export default router
