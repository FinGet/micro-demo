<template>
  <div>
    topbar
    {{gdata}}
  </div>
</template>

<script setup lang="ts">
	import microApp from '@micro-zoe/micro-app';
	import { ref } from 'vue';

	let gdata = ref(null);
	microApp.addGlobalDataListener((data) => {
		console.log('全局数据发生变化');
		gdata.value = data;
	}, true);
</script>

<style lang="less" scoped>

</style>
