import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../pages/home.vue'
import About from '../pages/about.vue'
import RateDemo from '../pages/RateDemo.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/rateDemo',
    name: 'RateDemo',
    component: RateDemo
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router