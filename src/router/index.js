import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Pastelero from '../views/Pastelero.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pastelero',
    name: 'pastelero',
    component: Pastelero
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
