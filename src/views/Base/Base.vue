<template>
<div class="base">
  <!-- 1.搜索区域 -->
  <div class="header">
    <!--  change 仅在输入框失去焦点或用户按下回车时触发  -->
    <el-input @change="searchInp" v-model="input" placeholder="请输入内容"></el-input>
    <el-button type="primary">查询</el-button>
    <el-button type="primary">添加</el-button>
  </div>
  <!-- 2.表格区展示视图数据 -->
  <div class="wrapper">
    <el-button @click="resetDateFilter">清除日期过滤器</el-button>
    <el-button @click="clearFilter">清除所有过滤器</el-button>
    <el-table
        ref="filterTable"
        :data="tableData"
        style="width: 100%">
      <el-table-column
          fixed
          prop="id"
          label="序号"
          width="50">
      </el-table-column>
      <el-table-column
          fixed
          prop="number"
          label="管理号码"
          width="100" show-overflow-tooltip>
      </el-table-column>
      <el-table-column
          fixed
          prop="name"
          label="设备名称"
          width="100">
      </el-table-column>
      <el-table-column
          prop="specifications"
          label="规格型号"
          width="100">
      </el-table-column>
      <el-table-column
          prop="serial_number"
          label="出厂编号"
          width="100" show-overflow-tooltip>
      </el-table-column>
      <el-table-column
          prop="manufacture_date"
          label="出厂日期"
          sortable
          width="100"
          column-key="date" show-overflow-tooltip>
      </el-table-column>
      <el-table-column
          prop="manufacturer"
          label="生产厂家"
          width="120" show-overflow-tooltip>
      </el-table-column>
      <el-table-column
          prop="address"
          label="使用地点"
          width="100">
      </el-table-column>
      <el-table-column
          prop="user"
          label="使用人"
          width="100">
      </el-table-column>
      <el-table-column
          prop="original_value"
          label="原值(元)"
          width="100">
      </el-table-column>
      <el-table-column
          prop="purchase_date"
          label="购置时间"
          sortable
          width="100"
          column-key="date" show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
          prop="entry_date"
          label="进场时间"
          sortable
          width="100"
          column-key="date" show-overflow-tooltip

      >
      </el-table-column>
      <el-table-column
          prop="technical_status"
          label="技术状况"
          width="100"
          :filters="[{ text: '一类', value: '一类' }, { text: '二类', value: '二类' }, { text: '三类', value: '三类' }]"
          :filter-method="filterHandler"
          filter-placement="bottom-end">

      </el-table-column>
      <el-table-column
          prop="weight"
          label="重量(kg)"
          width="100">
      </el-table-column>
      <el-table-column
          prop="power_specifications"
          label="动力规格"
          width="100">
      </el-table-column>
      <el-table-column
          prop="remark_info"
          label="备注"
          width="120">
      </el-table-column>
      <el-table-column
          fixed="right"
          label="操作"
          width="180">
        <template slot-scope="scope">
          <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <!-- 3.分页 -->
  <MyPagination
    :total="total"
    :pageSize="pageSize"
    @changePage="changePage"
  />
<!--  &lt;!&ndash; 4.弹框 &ndash;&gt;-->
<!--  <el-dialog-->
<!--      title="提示"-->
<!--      :visible.sync="dialogVisible"-->
<!--      width="30%">-->
<!--    <span>这是一段信息</span>-->
<!--    <span slot="footer" class="dialog-footer">-->
<!--    <el-button @click="dialogVisible = false">取 消</el-button>-->
<!--    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>-->
<!--  </span>-->
<!--  </el-dialog>-->

</div>
</template>

<script>
import MyPagination from '../../components/MyPagination.vue'
export default {
  components: {
    MyPagination
  },
  name: "Base",
  data() {
    return {
      input: '',
      tableData: [],
      total: 10,
      pageSize: 1,
      type:1
    }
  },
  methods: {
    //分页页码
    changePage(num){
      if (this.type===1){
        this.http(num);//商品列表分页
      }else{//搜索分页
        console.log('搜索的分页');
      }
    this.http(num);
    },
    //搜索查询数据-----------------------
    searchInp(val){
      console.log('搜索', val);
      this.$api.getSearch({
        search: val,
        page: 1,
        pageSize: 10
      }).then(res=>{
        console.log('搜索---', res.data);
        if(res.data.status === 200){
          this.tableData = res.data.result;
          this.total = res.data.total;
          this.pageSize = 10;
        }
      })

    },

    resetDateFilter() {
      this.$refs.filterTable.clearFilter('date');
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter();
    },
    //筛选操作
    filterHandler(value, row, column) {
      const property = column['property'];
      return row[property] === value;
    },
    //编辑操作
    handleEdit(index, row) {
      console.log(index, row);
    },
    //删除操作
    handleDelete(index, row) {
      console.log(index, row);
    },
    //商品列表的获取
    http(page){
      this.$api.getGoodsList({
        page:page,
        pageSize:10
      })
          .then(res => {
            if(res.status===200){
              this.tableData = res.data.data.result; //数据列表
              console.log(this.tableData)
              this.total = res.data.data.total;
            }
          })
    }
  },
  //生命周期函数
  created() {
this.http(1)
  }
}
</script>

<style lang="less" scoped>
.base{
  margin: 20px;
}
.header{
  display: flex;
  button{
    margin-left: 20px;
  }
}
</style>