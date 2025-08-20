import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import Conteudo from '../views/Conteudo.vue'
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
      path: '/content',
      name: 'content',
      component: Conteudo,
    },
  ],
})

export default router
