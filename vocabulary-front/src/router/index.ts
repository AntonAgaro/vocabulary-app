import { createRouter, createWebHistory } from 'vue-router'
import AppAuth from '@/views/AppAuth.vue';
import AppSignUp from '@/views/AppSignUp.vue';
import AppVocabulary from '@/views/AppVocabulary.vue';
import LetterPage from '@/components/LetterPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'auth',
      component: AppAuth
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: AppSignUp
    },
    {
      path: '/vocabulary',
      name: 'vocabulary',
      component: AppVocabulary,
    },
    {
      path: '/vocabulary/:letter',
      name: 'letter-page',
      component: LetterPage,
    },
  ]
})

export default router
