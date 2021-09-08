import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

export const constantRoutes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: () => ({
    top: 0,
  }),
  routes: constantRoutes,
})

export default router
