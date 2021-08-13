<template>
  <el-container direction="vertical">
    <el-header></el-header>
    <router-view></router-view>
    <el-footer></el-footer>
    <div onclick="window.open(`http://beian.miit.gov.cn`)" style="color:#ffd04b" align="center">蒙ICP备2021002429号</div>
  </el-container>


</template>

<script>
  import Leftmenulist from "./components/leftmenulist";
  export default {
    name:'App',
    components: {Leftmenulist},
  }
</script>
