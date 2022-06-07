import { createApp } from 'vue';
import App from './app.vue';
import router from './router';
import './publicPath';
import 'element-plus/dist/index.css';

const app = createApp(App);

app.use(router).mount('#app');

declare global {
  interface Window {
    microApp: any
    __MICRO_APP_NAME__: string
    __MICRO_APP_ENVIRONMENT__: string
  }
}

// 监听卸载操作
window.addEventListener('unmount', function () {
	app.unmount();
});
