import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    // Import dinamico para eviar la carga de las rutas inecesarias
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/register',
    component: () => import('../views/RegisterView.vue')
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
