<template>
  <div id="app">
    <el-menu :router="true" mode="horizontal">
      <el-menu-item index="/">Home</el-menu-item>
      <el-menu-item index="/vue">Vue</el-menu-item>
      <el-menu-item index="/react">React</el-menu-item>
      <el-menu-item index="/viteVue">Vite-Vue</el-menu-item>
    </el-menu>
    <router-view></router-view>
    <div id="vue" v-show="$route.path === '/vue'"></div>
    <div id="react" v-show="$route.path === '/react'"></div>
    <div id="viteVue" v-show="$route.path === '/viteVue'"></div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
  },
  updated() {
    console.log(this.$route)
  },
}
</script>

<style>
</style>
