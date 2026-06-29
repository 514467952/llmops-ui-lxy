import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/views/layouts/DefaultLayout.vue'
import BlankLayout from '@/views/layouts/BlankLayout.vue'
import { isLogin } from '@/utils/auth.ts'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 需要主布局（导航栏/侧边栏）的页面
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          redirect: 'home',
        },
        {
          path: 'home',
          name: 'page-home',
          component: () => import('@/views/pages/HomeView.vue'),
        },
        {
          path: 'space/apps',
          name: 'space-apps-list',
          component: () => import('@/views/space/apps/ListView.vue'),
        },
      ],
    },
    // 不需要主布局的页面（登录、注册等）
    {
      path: '/',
      component: BlankLayout,
      children: [
        {
          path: 'auth/login',
          name: 'auth-login',
          component: () => import('@/views/auth/LoginView.vue'),
        },
      ],
    },
    {
      path: '/space/apps/:app_id',
      name: 'space-apps-detail',
      component: () => import('@/views/space/apps/DetailView.vue'),
    },
  ],
})

router.beforeEach(async (to, from) => {
  if (!isLogin() && to.name != 'auth-login') {
    return { path: '/auth/Login' }
  }
  console.log(to)
  console.log(from)
})
export default router
