<template>
  <div>
    <!--
      url: nginx 配置的 子项目路径
      baseroute: nginx 配置的 主项目路径 + 项目中子项目的路由入口
     -->
    <micro-app
      name='popularize'
      url='http://www.finget.xyz/popularize'
      baseroute='/micro/popularize'
      @datachange='handleDataChange'></micro-app>
  </div>
</template>

<script setup lang="ts">
	import { ElMessage } from 'element-plus';

	const handleDataChange = (e) => {
		console.log(e.detail.data);
		const handleDataChange = (e: CustomEvent): void => {
			console.log('来自子应用 popularize 的数据:', e.detail.data);
		};
	};
</script>

<style lang="less" scoped>

</style>
