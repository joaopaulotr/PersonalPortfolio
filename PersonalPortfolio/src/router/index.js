import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import Escrita from '../views/Escrita.vue'
import Resume from '../views/Resume.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      component: About,
    },
    {
      path: '/about',
      redirect: { name: 'about' },
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects,
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume,
    },
    {
      path: '/escrita',
      name: 'escrita',
      component: Escrita,
    },
  ],
})

export default router
