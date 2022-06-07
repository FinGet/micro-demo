<template>
  <div class="sidebar">
    <router-link to="/home">
      <div>
        <el-icon :size="20" color="#fff">
          <i-custom-home />
        </el-icon>  首页
      </div>
    </router-link>
    <div>
      <i-ep-home-filled /> 出包
    </div>
    <div>
      <i-ep-home-filled /> 运营
    </div>
    <router-link to="/popularize">
      <div>
        <i-ep-home-filled /> 推广
      </div>
    </router-link>
    <div>
      <i-ep-home-filled /> 数据
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.sidebar {
  height: calc(100% - 20px);
  background: #3f6df8;
  color: #fff;
  padding: 10px;
}
</style>
