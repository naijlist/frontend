import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth.store' // Import the auth store
import HomeView from '../views/HomeView.vue'
import MainLayout from '../layout/MainLayout.vue'
import AuthLayout from '../layout/AuthLayout.vue'
import DashboardLayout from '../layout/DashboardLayout.vue'
import LoginView from '../views/auth/LoginView.vue'
import DashboardView from '@/views/main/dashboard/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
    },
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
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardLayout,
      meta: { requiresAuth: true }, // Add meta field to protect the route
      children: [
        {
          path: '',
          name: 'Dashboard',
          component: DashboardView
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  const isAuthenticated = authStore.loggedIn

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
