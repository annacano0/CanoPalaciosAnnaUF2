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
      props: (route) => ({
        anyDetall: route.params.anyDetall,
      }),
    },
    {
      path: '/detall_centre/:detallCentre/:anyDetall',
      name: 'centreDetall',

      component: () => import('../views/CentreDetallView.vue'),
      props: (route) => ({
        ...route.params,
        anyDetall: route.params.anyDetall,
        detallCentre: route.params.detallCentre,
      }),
    },
  ],
})

export default router
