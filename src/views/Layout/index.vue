<template>
  <div class="layout">
<!--    左侧导航区域-->
    <MyMenu class="menu" :isCollapse="isCollapse"/>
<!--    右侧内容区域-->
    <Content class="content" :class="{isActive:isCollapse}" v-on:changeCollapse="changeCollapse" :isCollapse="isCollapse"/>
  </div>
</template>

<script>
import MyMenu from './Mymenu.vue'
import Content from './Content.vue'
export default {
    components: {
        MyMenu,
        Content
    },
  data(){
      return{
        isCollapse: false
      }
  },
  methods:{
    changeCollapse(){
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style lang="less" scoped>
.layout{
  //display: flex;
  .menu{
    //width: 200px;
    min-height: 500px;
    background: #112f50;
    position: fixed;
    top:0;
    bottom:0;
  }
  .content{
    top:0;
    //overflow:hidden;
    margin-left: 200px;
    //transition: all 0.3s;
  }
  .isActive{
    margin-left: 64px;
}

}
</style>