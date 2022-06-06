<template>
  <div class="home">
    首页
    <TestComponent/>
    <el-icon :size="50" color="red">
      <i-ep-edit />
    </el-icon>
    <el-button type="primary" @click="sendToChildren">给子项目发消息</el-button>
    <el-button type="primary" @click="setGlobalData">设置全局数据</el-button>
    <el-button type="primary" @click="getGlobalData">获取全局数据</el-button>
    <div>全局数据： {{gdata}}</div>

  </div>
</template>

<script setup lang="ts">
	import microApp from '@micro-zoe/micro-app';
	import { ref } from 'vue';
	import TestComponent from '@ultra/share/components/test.vue';

	const sendToChildren = () => {
		// 发送数据给子应用，setData第二个参数只接受对象类型
		microApp.setData('popularize', { type: '来自基座的消息' });
	};

	const setGlobalData = () => {
		// setGlobalData只接受对象作为参数
		microApp.setGlobalData({ type: '基座全局数据' });
	};

	let gdata = ref(null);

	const getGlobalData = () => {
		const globalData = microApp.getGlobalData(); // 返回全局数据
		console.log(globalData);
		gdata.value = globalData;
	};
</script>
