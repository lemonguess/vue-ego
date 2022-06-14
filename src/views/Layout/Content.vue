<template>
  <div>
    <div class="header">
      <i v-if='!isCollapse' @click="changeMenu" class="icon el-icon-s-fold"></i>
      <i v-else @click="changeMenu" class="icon el-icon-s-unfold"></i>
      顶部区域
    </div>
    <!-- 内容区域 路由出口-->
    <div class="content">
      <router-view/>
    </div>
  </div>

</template>

<script>
export default {
  props:['isCollapse'],
  methods:{
  changeMenu(){
    //点击切换按钮的时候 修改父组件的数据 isCollapse
    this.$emit('changeCollapse')
  }
}
}
</script>

<style lang="less" scoped>
.header {
  height: 50px;
  line-height: 50px;
  color: #fff;
  background: #1e78bf;
  .icon {
    font-size: 30px;
    margin: 10px;
  }
}
//.header-right {
//  float: right;
//  padding-right: 20px;
//  display: flex;
//  .user {
//    margin-left: 20px;
//    span {
//      position: relative;
//      top: -4px;
//      margin-right: 10px;
//    }
//  }
//}

</style>