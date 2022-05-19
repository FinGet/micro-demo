<script setup lang="ts">

</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <router-link to="/vue2">vue2子应用</router-link>
  <router-link to="/vue3">vue3子应用</router-link>
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
