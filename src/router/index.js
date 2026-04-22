import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Quiz from '../views/Quiz.vue'
import Result from '../views/Result.vue'
import Test from '@/views/Test.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/quiz', component: Quiz },
    { path: '/result', component: Result },
    { path: '/test', component: Test}
  ]
})