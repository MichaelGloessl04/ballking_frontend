import { createRouter, createWebHistory } from 'vue-router'
import Ranking from '../views/Ranking.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Ranking
    },
    {
      path: '/points',
      name: 'points',
      component: () => import('../views/PointManager.vue')
    },
  ]
})

export default router
