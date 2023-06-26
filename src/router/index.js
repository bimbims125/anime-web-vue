import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    component: ()=> import('../views/Index.vue')
  },
  {
    path: '/anime/details/:slug',
    name: 'anime-details',
    component: ()=> import('../views/DetailAnime.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
