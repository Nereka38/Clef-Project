import { createRouter, createWebHistory } from 'vue-router'
import HomeVue from '../views/HomeView.vue'
import ExploreVue from '../views/Explore.vue'
import MyMusicVue from '../views/MyMusic.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeVue
    },
    {
      path: '/explore',
      name: 'explore',
      component: ExploreVue
    },
    {
      path: '/mymusic',
      name: 'mymusic',
      component: MyMusicVue
    },
  ]
})

export default router
