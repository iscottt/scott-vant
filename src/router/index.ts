import type { App } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { createRouterGuard } from './createRouterGuard';

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
  {
    name: 'return',
    path: '/return',
    meta: {
      title: '回单',
    },
    component: () => import('@/views/return.vue'),
  },
  {
    name: 'submit',
    path: '/submit',
    meta: {
      title: '提交',
    },
    component: () => import('@/views/submit.vue'),
  },
  {
    name: 'asset',
    path: '/asset',
    meta: {
      title: '资产租用确认',
    },
    component: () => import('@/views/asset.vue'),
  },
  {
    name: 'asset-comment',
    path: '/asset-comment',
    meta: {
      title: '资产租用评价',
    },
    component: () => import('@/views/assetComment.vue'),
  },
  {
    name: 'consumptive',
    path: '/consumptive',
    meta: {
      title: '耗材领用确认',
    },
    component: () => import('@/views/consumptive.vue'),
  },
  {
    name: 'consumptive-comment',
    path: '/consumptive-comment',
    meta: {
      title: '耗材领用评价',
    },
    component: () => import('@/views/consumptiveComment.vue'),
  },
];
export const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
});
export async function setupRouter(app: App) {
  app.use(router);
  // 设置document title
  createRouterGuard(router);
  await router.isReady();
}

export default router;
