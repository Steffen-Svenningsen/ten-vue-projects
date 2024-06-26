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
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: () => import('../views/projects/AmazingCalculator.vue')
    },
    {
      path: '/accordion',
      name: 'accordion',
      component: () => import('../views/projects/AccordionComponent.vue')
    },
    {
      path: '/form-validation',
      name: 'form-validation',
      component: () => import('../views/projects/FormValidation.vue')
    },
    {
      path: '/password-generator',
      name: 'password-generator',
      component: () => import('../views/projects/PasswordGenerator.vue')
    },
    {
      path: '/progress-steps',
      name: 'progress-steps',
      component: () => import('../views/projects/ProgressSteps.vue')
    },
    {
      path: '/dad-jokes',
      name: 'dad-jokes',
      component: () => import('../views/projects/DadJokes.vue')
    },
    {
      path: '/github-user-search',
      name: 'github-user-search',
      component: () => import('../views/projects/GithubUserSearch.vue')
    },
    {
      path: '/wiki-clone',
      name: 'wiki-clone',
      component: () => import('../views/projects/WikiClone.vue')
    }
  ]
})

export default router
