import {createRouter, createWebHistory} from 'vue-router'
const router = createRouter({
	history: createWebHistory(), // 打包后的文件放在那个路径下
	routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home.vue')
    },
    {
      path: '/vue2',
      name: 'vue2',
      component: () => import('@/views/vue2.vue')
    },
    {
      path: '/vue3',
      name: 'vue3',
      component: () => import('@/views/vue3.vue')
    },
  ]
});

export default router