<template>
  <el-container direction="vertical" class="homeWrap">
    <el-header>
      <div style="font-size:40px;font-family: 'Microsoft YaHei UI Light';text-align: center">账单管理系统</div>
    </el-header>
    <router-view></router-view>
    <el-footer>
      <div onclick="window.open(`http://beian.miit.gov.cn`)" style="color:#ffd04b" align="center">蒙ICP备2021002429号</div>
    </el-footer>
  </el-container>
</template>

<style>
  @import "./styles/appVueStyle.css";
</style>

<script>
  import Leftmenulist from "./components/leftmenulist";

  export default {
    name: 'App',
    components: {Leftmenulist},
  }
</script>
