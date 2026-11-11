import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Landing Page',
      component: () => import('@/views/Experiments/LandingPage/LandingPage.vue')
    },
    {
      path: '/impressum',
      name: 'Impressum',
      component: () => import('@/views/Legal/ImpressumPage.vue')
    },
    {
      path: '/datenschutz',
      name: 'Datenschutz',
      component: () => import('@/views/Legal/PrivacyPage.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      redirect: '/'
    }
  ]
})

const HOME_TITLE = document.title

router.afterEach((to) => {
  document.title = to.path === '/' ? HOME_TITLE : `${String(to.name)} | cnotv.xyz`
})

export default router
