import { createApp } from 'vue';
import App from './app.vue';
import router from './router';
import microApp from '@micro-zoe/micro-app';
import '@ultra/share/style/index.less';
import 'element-plus/dist/index.css';

microApp.start();
createApp(App).use(router).mount('#app');

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    MicroApp: any
  }
}
