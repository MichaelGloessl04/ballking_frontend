import { createRouter, createWebHistory } from 'vue-router'
import Ranking from '../views/Ranking.vue'
import KingRanking from '@/views/KingRanking.vue'
import QueenRanking from '../views/QueenRanking.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Ranking,
    },
    {
      path: "/king",
      name: "king",
      component: KingRanking,
    },
    {
      path: "/queen",
      name: "queen",
      component: QueenRanking,
    },
    {
      path: "/points",
      name: "points",
      component: () => import("../views/PointManager.vue"),
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: () => import("../views/Edit.vue"),
    },
  ],
});

export default router
