import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/Home.vue'
import Mine from '@/views/mine/Mine.vue'
import Login from '@/views/mine/login/Login.vue'
import Register from '@/views/mine/register/Register.vue'
import Forget from '@/views/mine/forget/Forget.vue'
import Showcase from '@/views/showcase/Showcase.vue'
import History from '@/views/history/History.vue'
import Default from '@/views/history/default/Default.vue'
import Favorite from '@/views/history/favorite/Favorite.vue'
import loadon from '@/service/loadon'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/mine',
    name: 'Mine',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Mine,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/forget',
    name: 'Forget',
    component: Forget
  },
  {
    path: '/showcase/:type',
    name: 'Showcase',
    component: Showcase
  },
  {
    path: '/history',
    name: 'History',
    component: History,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router