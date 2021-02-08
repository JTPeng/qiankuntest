<template>
  <el-container style="height: 500px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :router="true">
        <el-menu-item
          v-for="route in menuList"
          :index="route.path"
          :key="route.path"
        >
          <i :class="route.icon">{{ route.title }}</i></el-menu-item
        >
      </el-menu>
    </el-aside>
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>

      <el-main>
        <router-view></router-view>
        <div id="vue" v-show="$route.path.includes('/vue')"></div>
        <div id="react" v-show="$route.path.includes('/react')"></div>
        <div id="viteVue" v-show="$route.path === '/viteVue'"></div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { menuList } from '../utils/menuList'
export default {
  data() {
    return {
      menuList: [...menuList],
    }
  },
}
</script>

<style scoped>
</style>