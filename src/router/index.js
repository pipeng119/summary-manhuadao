import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/Home.vue'
import Mine from '@/views/mine/Mine.vue'
import Login from '@/views/mine/login/Login.vue'
import Register from '@/views/mine/register/Register.vue'
import Forget from '@/views/mine/forget/Forget.vue'
import Category from '@/views/category/Category.vue'
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
    path: '/category',
    name: 'Category',
    component: Category
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router