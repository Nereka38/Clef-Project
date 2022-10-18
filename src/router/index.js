import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Explore from '../views/Explore.vue'
import MyMusic from '../views/MyMusic.vue'
import Calendar from '../views/Calendar.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/explore',
      name: 'explore',
      component: Explore
    },
    {
      path: '/mymusic',
      name: 'mymusic',
      component: MyMusic
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: Calendar
    },
  ]
})

export default router
