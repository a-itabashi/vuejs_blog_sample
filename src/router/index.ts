import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/blogs',
      name: 'blogList',
      component: () => import('../views/BlogList.vue'),
    },
    {
      path: '/blogs/:id',
      name: 'blogDetail',
      component: () => import('../views/BlogDetail.vue'),
    },
    {
      path: '/blogs/create',
      name: 'blogCreate',
      component: () => import('../views/BlogCreate.vue'),
    },
    {
      path: '/chatRooms',
      name: 'chatRooms',
      component: () => import('../views/ChatRoomList.vue'),
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
