import { createApp } from 'vue';
import App from './app.vue';
import router from './router';
import './publicPath';
import 'element-plus/dist/index.css';

const app = createApp(App);

app.use(router).mount('#app');

// 监听卸载操作
window.addEventListener('unmount', function () {
	app.unmount();
});
