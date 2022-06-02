<template>
  <div class="height100">
    <el-container class="height100">
      <el-aside width="80px" class="height100">
        <Sidebar/>
      </el-aside>
      <el-container>
        <el-header><Topbar/></el-header>
        <el-main class="main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
	import Sidebar from './modules/sidebar.vue';
	import Topbar from './modules/topbar.vue';
</script>

<style lang="less" scoped>
.main {
  background-color: #f1f1f1;
}
</style>
