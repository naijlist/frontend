import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AdsDetails from '../views/AdsDetails.vue'
import Signup from '../views/Signup.vue'
import Auth from '../views/Auth.vue'
import Dashboard from '@/views/Dashboard'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name:"signup",
    component: Signup
  },
  {
    path: '/auth',
    name: 'auth',
    component: Auth
  },
  {
    path: '/ads-details/:id',
    name: 'AdsDetails',
    component:AdsDetails
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach((to, from, next)=> {
  const loggedIn = localStorage.getItem('user') || true
  if(to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next('/')
  }
  next()
})

export default router
