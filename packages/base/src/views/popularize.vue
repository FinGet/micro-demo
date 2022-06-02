<template>
  <div>
    <micro-app
      name='popularize'
      url='http://localhost:8888/'
      baseroute='/popularize'
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
