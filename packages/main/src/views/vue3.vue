<template>
  <div>
    vue3子应用
    <micro-app 
      name="appname-vue3" 
      url="http://localhost:3121/vue3/" 
      inline
      disableSandbox
      baseroute="/vue3">
    </micro-app>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>