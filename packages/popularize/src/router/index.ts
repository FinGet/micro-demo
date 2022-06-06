import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		component: () => import('@/views/home.vue')
	}
];

const router = createRouter({
	// 👇 __MICRO_APP_BASE_ROUTE__ 为micro-app传入的基础路由
	// @ts-ignore
	history: createWebHistory(window.__MICRO_APP_BASE_ROUTE__ || '/popularize'),
	routes
});

export default router;
