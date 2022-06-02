<template>
  <div>
    这是公共组件 {{msg}}
    改一下
  </div>
</template>

<script setup lang="ts">
	import { defineProps } from 'vue';
	const props = defineProps({
		msg: {
			type: String,
			default: 'Hello World!'
		}
	});
</script>

<style lang="less" scoped>

</style>
