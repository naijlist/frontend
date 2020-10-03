import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/auth',
    name: 'auth',
   
    component: () => import(/* webpackChunkName: "auth" */ '../views/Auth.vue')
  },
  {
    path: '/sign-up',
    name: 'sign-up',

    component: () => import( /* webpackChunkName: "user" */ '../views/User.vue')
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('../views/Main.vue'),
    children:[
      {
        path: '/dashboard',
        name: 'dashboard',
        component: ()=> import('../components/user/Dashboard.vue')
      },
      {
        path: '/profile',
        name: '/profile',
        component: () => import('../components/user/Profile.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
