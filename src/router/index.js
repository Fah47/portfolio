import { createRouter, createWebHistory } from 'vue-router'
// ถอยออกจากโฟลเดอร์ router 1 ขั้น แล้วเข้าไปที่ page
import HomeView from '../page/Home.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../page/AboutView.vue')
    },
  ]
})

export default router