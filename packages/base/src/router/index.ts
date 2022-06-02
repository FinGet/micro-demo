import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import DefaultLayout from '@/layouts/defaultLayout.vue';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		component: DefaultLayout,
		redirect: '/home',
		children: [
			{
				path: '/home',
				name: 'Home',
				component: () => import('@/views/home.vue')
			},
			{
				// 👇 非严格匹配，/popularize/* 都指向 Popularize 页面
				path: '/popularize/:page*',
				name: 'Popularize',
				component: () => import('../views/popularize.vue')
			}
		]
	}

];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

export default router;
