import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/home.vue'
import About from '../pages/about.vue'
import RateDemo from '../pages/RateDemo.vue'
import Count from '../components/Count.vue'
import Mouse from '../components/Mouse.vue'
import Dialog from '../components/dialog/index.vue'

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
    path: '/rate',
    name: 'RateDemo',
    component: RateDemo
  },
  {
    path: '/count',
    name: 'Count',
    component: Count
  },
  {
    path: '/mouse',
    name: 'Mouse',
    component: Mouse
  },
  {
    path: '/dialog',
    name: 'Dialog',
    component: Dialog
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
