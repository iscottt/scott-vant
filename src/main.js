import { createApp } from 'vue';
import App from './App.vue';
import 'virtual:windi.css';
import router, { setupRouter } from './router';
import { setupStore } from '@/store';

const app = createApp(App);
setupStore(app);
setupRouter(app);
// 路由准备就绪后挂载APP实例
router.isReady().then(() => app.mount('#app'));
