import type { Router } from 'vue-router';
import { useTitle } from '@vueuse/core';

/**
 * 路由守卫函数
 * @param router - 路由实例
 */
export function createRouterGuard(router: Router) {
  router.afterEach((to) => {
    // 设置document title
    useTitle(to.meta.title as any);
  });
}
