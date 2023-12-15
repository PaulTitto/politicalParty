import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/latest_news',
      name: 'news',
      component: () => import('../views/NewsView.vue')
    },
    {
      path: '/contact',
      name: 'cintact',
      component: () => import('../views/ContactView.vue')
    }
  ]
})

export default router
