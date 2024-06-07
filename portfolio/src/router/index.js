import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ContactView from '@/views/ContactView.vue'
import UrlNotFoundView from '@/views/UrlNotFoundView.vue'
import ProjectUrlNotFoundView from '@/views/ProjectUrlNotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/about', name: 'about', component: AboutView },
    { path: '/projects', name: 'projects', component: ProjectsView },
    { path: '/contact', name: 'contact', component: ContactView },
    { path: '/:pathMatch(.*)*', name: 'url-not-found', component: UrlNotFoundView },
    { path: '/projects/:pathMatch(.*)*', name: 'project-url-not-found', component: ProjectUrlNotFoundView },
  ]
})

export default router
