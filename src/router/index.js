import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AdsDetails from '../views/AdsDetails.vue'
import Signup from '../views/Signup.vue'
import Auth from '../views/Auth.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
