<template>
  <el-container class="homeWrap">
    <el-aside>
      <el-menu
        :default-active="this.$route.path"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :unique-opened=true
        :router=true
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>订单信息</span>
          </template>
          <el-menu-item-group title="出售">
            <el-menu-item index="/menu/purchaserTable">预定</el-menu-item>
            <el-menu-item index="/menu/update">已售出</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="租赁">
            <el-menu-item index="1-3">预定</el-menu-item>
            <el-menu-item index="1-4">已租出</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-setting"></i>
          <span slot="title">后台设置</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<style>
  @import "../styles/leftmenuStyle.css";
</style>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
