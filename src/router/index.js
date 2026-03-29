import { createRouter, createWebHistory } from 'vue-router'
import Start from '@/pages/Start.vue'
import Home from '@/pages/Home.vue'
import Templates from '@/pages/Templates.vue'
import TemplateDetails from '@/pages/TemplateDetails.vue'
import Services from '@/pages/Services.vue'
import Pricing from '@/pages/Pricing.vue'
import Process from '@/pages/Process.vue'
import Contact from '@/pages/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'start',
      component: Start
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/templates',
      name: 'templates',
      component: Templates
    },
    {
      path: '/template/:slug',
      name: 'template-details',
      component: TemplateDetails,
      props: true
    },
    {
      path: '/services',
      name: 'services',
      component: Services
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: Pricing
    },
    {
      path: '/process',
      name: 'process',
      component: Process
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})

export default router
