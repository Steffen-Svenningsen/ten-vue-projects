import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/todo-app',
      name: 'todo-app',
      component: () => import('../views/projects/TodoApp.vue')
    },
    {
      path: '/random-quote-generator',
      name: 'random-quote-generator',
      component: () => import('../views/projects/RandomQuoteGenerator.vue')
    }
  ]
})

export default router
