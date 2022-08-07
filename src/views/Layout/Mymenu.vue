<template>
  <div>
    <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        background-color="#112f50"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
        :collapse="isCollapse"
    >
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">管理系统首页</span>
      </el-menu-item>
      <el-menu-item index="/report">
        <i class="el-icon-s-data"></i>
        <span slot="title">分析报表概览</span>
      </el-menu-item>
      <el-menu-item index="/base">
        <i class="el-icon-coin"></i>
        <span slot="title">设备台账信息</span>
      </el-menu-item>
      <el-menu-item index="/inspection">
        <i class="el-icon-date"></i>
        <span slot="title">设备日常检查</span>
      </el-menu-item>
      <el-menu-item index="/maintain">
        <i class="el-icon-lock"></i>
        <span slot="title">设备维修保养</span>
      </el-menu-item>
      <el-submenu index="/process">
        <template slot="title">
          <i class="el-icon-document-copy"></i>
          <span>业务流程管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/process/plan">
            <i class="el-icon-document"></i>
            <span>计划管理</span>
          </el-menu-item>
          <el-menu-item index="/process/order"><i class="el-icon-document"></i>
            <span>采购调拨</span></el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>

</template>

<script>
export default {
  props: ['isCollapse'],
  data(){
    return{
      isCollapse: false
    }
  }

}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>