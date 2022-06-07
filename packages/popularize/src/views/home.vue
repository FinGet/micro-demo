<template>
  <div class="home">
    <el-card>
      <TestComponent msg="来自子应用的props"/>
      <h1>子项目</h1>
      asdkfjask
      {{pdata}}
      <el-button @clik="sendToBase">给基座发消息</el-button>
      <el-button type="primary" @click="setGlobalData">设置全局数据</el-button>
      <el-button type="primary" @click="getGlobalData">获取全局数据</el-button>
      <div>全局数据： {{gdata}}</div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
	import { ElMessage } from 'element-plus';
	import { onMounted, ref } from 'vue';
	import TestComponent from '@ultra/share/components/test.vue';
	let pdata = ref(null);
	onMounted(() => {
		const data = window.microApp.getData();
		pdata.value = data;
		console.log(pdata);
	});
	const sendToBase = () => {
		// @ts-ignore
		window.microApp.dispatch({ type: '子应用发送的数据' });
	};

	// @ts-ignore
	window.microApp.addGlobalDataListener(() => {
		ElMessage({
			message: '子应用监听到全局数据发生变化',
			type: 'success'
		});
	}, true);

	const setGlobalData = () => {
		// setGlobalData只接受对象作为参数
		window.microApp.setGlobalData({ type: '子应用全局数据' });
	};

	let gdata = ref(null);

	const getGlobalData = () => {
		const globalData = window.microApp.getGlobalData(); // 返回全局数据
		console.log(globalData);
		gdata.value = globalData;
	};
</script>
