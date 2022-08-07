<template>
  <div style="text-align: center;margin: 20px;">
  <el-pagination
      background
      layout="total, prev, pager, next, jumper"
      :total='total'
      :page-size='pageSize'
  @current-change="changePage">
  </el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    total:{
      type: Number,
      default: 100
    },
    pageSize:{
      type: Number,
      default: 10
    }
  },
  methods: {
    changePage(page){
      this.$emit('changePage', page)
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