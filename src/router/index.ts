import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainLayout from '../layout/MainLayout.vue'
import AuthLayout from '../layout/AuthLayout.vue'
import LoginView from '../views/auth/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'public',
      component: MainLayout,
      redirect: '/',
      children: [
        {
          path: '/',
          name: 'Home',
          component: HomeView
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/AboutView.vue')
        },
        {
          path: '/preview/:id',
          name: 'Ads Preview',
          component: () => import('../views/main/ads/preview/IndexView.vue')
        }
      ]
    },

    {
      path: '/auth',
      name: 'Auth',
      component: AuthLayout,
      children: [
        {
          path: '/login',
          name: 'Login',
          component: LoginView
        },
        {
          path: '/register',
          name: 'Register',
          component: () => import('../views/auth/RegisterView.vue')
        }
      ]
    }
  ]
})

export default router
