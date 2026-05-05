import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Quiz from '@/views/Quiz.vue'
import Result from '@/views/Result.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/quiz', component: Quiz },
    { path: '/result', component: Result },

    { path: '/login', component: Login },
    { path: '/register', component: Register }
  ]
})

export default router