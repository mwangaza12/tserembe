import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServicesView from '@/views/ServicesView.vue'
import ContactView from '@/views/ContactView.vue'
import ApartmentsView from '@/views/ApartmentsView.vue'
import ApartmentDetailView from '@/views/ApartmentDetailView.vue'

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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/services',
      name: 'sevices',
      component: ServicesView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/apartments',
      name: 'apartments',
      component: ApartmentsView
    },
    {
      path: '/apartments/:id',
      name: 'apartments-id',
      component: ApartmentDetailView
    },
  ]
})

export default router
