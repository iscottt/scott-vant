import type { App } from 'vue';
import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router';

export const constantRoutes = [
  {
    name: 'root',
    path: '/',
    redirect: '/home',
    meta: {
      title: 'Root',
    },
  },
  {
    name: 'home',
    path: '/home',
    meta: {
      title: '首页',
    },
    component: () => import('@/views/home.vue'),
  },
  {
    name: 'receive',
    path: '/receive',
    meta: {
      title: '接单',
    },
    component: () => import('@/views/receive.vue'),
  },
];
export const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
});
export async function setupRouter(app: App) {
  app.use(router);
  // createRouterGuard(router);
  await router.isReady();
}

export default router;
