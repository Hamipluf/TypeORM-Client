import { createRouter, createWebHistory } from 'vue-router'
import { getCurrent } from '@/utils/auth/getCurrent';
const routes = [
  {
    path: '/',
    // Import dinamico para eviar la carga de las rutas inecesarias
    component: () => import('../views/HomeView.vue')
  },
  {
    name: 'Login',
    path: '/login',
    component: () => import('../views/LoginView.vue')
  },
  {
    name: 'Register',
    path: '/register',
    component: () => import('../views/RegisterView.vue')
  },
  {
    name: 'Feed',
    path: '/feed',
    component: () => import('../views/FeedView.vue'),
    meta: { requiresAuth: true },
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

const isAuthenticated = () => {
  return !!localStorage.getItem('token')
};
console.log(isAuthenticated())
// Registra una función que se ejecutará antes de cada cambio de ruta.
router.beforeEach((to, from, next) => {
  // Esto verifica si la ruta a la que el usuario está navegando tiene la meta propiedad requiresAuth definida como true
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // se llama a la función isAuthenticated() para verificar si el usuario está autenticado. Si no lo está, se redirige al usuario a la página de inicio de sesión (en este caso, la ruta con nombre 'login')
    if (!isAuthenticated()) {
      next({ name: 'Login' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
