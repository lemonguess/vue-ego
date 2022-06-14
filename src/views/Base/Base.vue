<template>
<div class="base">
  <!-- 1.搜索区域 -->
  <div class="header">
    <el-input v-model="input" placeholder="请输入内容"></el-input>
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
          width="100">
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
          width="100">
      </el-table-column>
      <el-table-column
          prop="manufacture_date"
          label="出厂日期"
          sortable
          width="100"
          column-key="date">
      </el-table-column>
      <el-table-column
          prop="manufacturer"
          label="生产厂家"
          width="120">
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
          column-key="date"
      >
      </el-table-column>
      <el-table-column
          prop="entry_date"
          label="进场时间"
          sortable
          width="100"
          column-key="date"

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
</div>
</template>

<script>
export default {
  name: "Base",
  data() {
    return {
      input: '',
      tableData: [
          {
      id: 1,
      number: '110-0001-0404',
      name: '轮式装载机',
      specifications: 'LG855',
      serial_number: 'LZ50C1203005',
      manufacture_date: '2017-07-01',
      manufacturer: '中国龙工控股有限公司',
      address: '搅拌站',
      user: '李先朋',
      original_value: '150000',
      purchase_date: '2012-10-15',
      entry_date: '2019-10-18',
      technical_status: '二类',
      weight: '16000',
      power_specifications: '162KW',
      remark_info: ''

    },
        {
      id: 2,
      number: '110-0001-0404',
      name: '轮式装载机',
      specifications: 'LG855',
      serial_number: 'LZ50C1203005',
      manufacture_date: '2017-07-01',
      manufacturer: '中国龙工控股有限公司',
      address: '搅拌站',
      user: '李先朋',
      original_value: '150000',
      purchase_date: '2012-10-15',
      entry_date: '2019-10-18',
      technical_status: '一类',
      weight: '16000',
      power_specifications: '162KW',
      remark_info: ''

    },
        {
          id: 1,
          number: '110-0001-0404',
          name: '轮式装载机',
          specifications: 'LG855',
          serial_number: 'LZ50C1203005',
          manufacture_date: '2017-07-01',
          manufacturer: '中国龙工控股有限公司',
          address: '搅拌站',
          user: '李先朋',
          original_value: '150000',
          purchase_date: '2012-10-15',
          entry_date: '2019-10-18',
          technical_status: '二类',
          weight: '16000',
          power_specifications: '162KW',
          remark_info: ''

        },
        {
          id: 2,
          number: '110-0001-0404',
          name: '轮式装载机',
          specifications: 'LG855',
          serial_number: 'LZ50C1203005',
          manufacture_date: '2017-07-01',
          manufacturer: '中国龙工控股有限公司',
          address: '搅拌站',
          user: '李先朋',
          original_value: '150000',
          purchase_date: '2012-10-15',
          entry_date: '2019-10-18',
          technical_status: '一类',
          weight: '16000',
          power_specifications: '162KW',
          remark_info: ''

        },
        {
          id: 1,
          number: '110-0001-0404',
          name: '轮式装载机',
          specifications: 'LG855',
          serial_number: 'LZ50C1203005',
          manufacture_date: '2017-07-01',
          manufacturer: '中国龙工控股有限公司',
          address: '搅拌站',
          user: '李先朋',
          original_value: '150000',
          purchase_date: '2012-10-15',
          entry_date: '2019-10-18',
          technical_status: '二类',
          weight: '16000',
          power_specifications: '162KW',
          remark_info: ''

        },
        {
          id: 2,
          number: '110-0001-0404',
          name: '轮式装载机',
          specifications: 'LG855',
          serial_number: 'LZ50C1203005',
          manufacture_date: '2017-07-01',
          manufacturer: '中国龙工控股有限公司',
          address: '搅拌站',
          user: '李先朋',
          original_value: '150000',
          purchase_date: '2012-10-15',
          entry_date: '2019-10-18',
          technical_status: '一类',
          weight: '16000',
          power_specifications: '162KW',
          remark_info: ''

        },
        {
          id: 1,
          number: '110-0001-0404',
          name: '轮式装载机',
          specifications: 'LG855',
          serial_number: 'LZ50C1203005',
          manufacture_date: '2017-07-01',
          manufacturer: '中国龙工控股有限公司',
          address: '搅拌站',
          user: '李先朋',
          original_value: '150000',
          purchase_date: '2012-10-15',
          entry_date: '2019-10-18',
          technical_status: '二类',
          weight: '16000',
          power_specifications: '162KW',
          remark_info: ''

        },
        {
          id: 2,
          number: '110-0001-0404',
          name: '轮式装载机',
          specifications: 'LG855',
          serial_number: 'LZ50C1203005',
          manufacture_date: '2017-07-01',
          manufacturer: '中国龙工控股有限公司',
          address: '搅拌站',
          user: '李先朋',
          original_value: '150000',
          purchase_date: '2012-10-15',
          entry_date: '2019-10-18',
          technical_status: '一类',
          weight: '16000',
          power_specifications: '162KW',
          remark_info: ''

        },
        {
          id: 1,
          number: '110-0001-0404',
          name: '轮式装载机',
          specifications: 'LG855',
          serial_number: 'LZ50C1203005',
          manufacture_date: '2017-07-01',
          manufacturer: '中国龙工控股有限公司',
          address: '搅拌站',
          user: '李先朋',
          original_value: '150000',
          purchase_date: '2012-10-15',
          entry_date: '2019-10-18',
          technical_status: '二类',
          weight: '16000',
          power_specifications: '162KW',
          remark_info: ''

        },
        {
          id: 2,
          number: '110-0001-0404',
          name: '轮式装载机',
          specifications: 'LG855',
          serial_number: 'LZ50C1203005',
          manufacture_date: '2017-07-01',
          manufacturer: '中国龙工控股有限公司',
          address: '搅拌站',
          user: '李先朋',
          original_value: '150000',
          purchase_date: '2012-10-15',
          entry_date: '2019-10-18',
          technical_status: '一类',
          weight: '16000',
          power_specifications: '162KW',
          remark_info: ''

        },
        {
          id: 1,
          number: '110-0001-0404',
          name: '轮式装载机',
          specifications: 'LG855',
          serial_number: 'LZ50C1203005',
          manufacture_date: '2017-07-01',
          manufacturer: '中国龙工控股有限公司',
          address: '搅拌站',
          user: '李先朋',
          original_value: '150000',
          purchase_date: '2012-10-15',
          entry_date: '2019-10-18',
          technical_status: '二类',
          weight: '16000',
          power_specifications: '162KW',
          remark_info: ''

        },
        {
          id: 2,
          number: '110-0001-0404',
          name: '轮式装载机',
          specifications: 'LG855',
          serial_number: 'LZ50C1203005',
          manufacture_date: '2017-07-01',
          manufacturer: '中国龙工控股有限公司',
          address: '搅拌站',
          user: '李先朋',
          original_value: '150000',
          purchase_date: '2012-10-15',
          entry_date: '2019-10-18',
          technical_status: '一类',
          weight: '16000',
          power_specifications: '162KW',
          remark_info: ''

        },
        {
          id: 1,
          number: '110-0001-0404',
          name: '轮式装载机',
          specifications: 'LG855',
          serial_number: 'LZ50C1203005',
          manufacture_date: '2017-07-01',
          manufacturer: '中国龙工控股有限公司',
          address: '搅拌站',
          user: '李先朋',
          original_value: '150000',
          purchase_date: '2012-10-15',
          entry_date: '2019-10-18',
          technical_status: '二类',
          weight: '16000',
          power_specifications: '162KW',
          remark_info: ''

        },
        {
          id: 2,
          number: '110-0001-0404',
          name: '轮式装载机',
          specifications: 'LG855',
          serial_number: 'LZ50C1203005',
          manufacture_date: '2017-07-01',
          manufacturer: '中国龙工控股有限公司',
          address: '搅拌站',
          user: '李先朋',
          original_value: '150000',
          purchase_date: '2012-10-15',
          entry_date: '2019-10-18',
          technical_status: '一类',
          weight: '16000',
          power_specifications: '162KW',
          remark_info: ''

        },
        {
          id: 1,
          number: '110-0001-0404',
          name: '轮式装载机',
          specifications: 'LG855',
          serial_number: 'LZ50C1203005',
          manufacture_date: '2017-07-01',
          manufacturer: '中国龙工控股有限公司',
          address: '搅拌站',
          user: '李先朋',
          original_value: '150000',
          purchase_date: '2012-10-15',
          entry_date: '2019-10-18',
          technical_status: '二类',
          weight: '16000',
          power_specifications: '162KW',
          remark_info: ''

        },
        {
          id: 2,
          number: '110-0001-0404',
          name: '轮式装载机',
          specifications: 'LG855',
          serial_number: 'LZ50C1203005',
          manufacture_date: '2017-07-01',
          manufacturer: '中国龙工控股有限公司',
          address: '搅拌站',
          user: '李先朋',
          original_value: '150000',
          purchase_date: '2012-10-15',
          entry_date: '2019-10-18',
          technical_status: '一类',
          weight: '16000',
          power_specifications: '162KW',
          remark_info: ''

        },
        {
          id: 1,
          number: '110-0001-0404',
          name: '轮式装载机',
          specifications: 'LG855',
          serial_number: 'LZ50C1203005',
          manufacture_date: '2017-07-01',
          manufacturer: '中国龙工控股有限公司',
          address: '搅拌站',
          user: '李先朋',
          original_value: '150000',
          purchase_date: '2012-10-15',
          entry_date: '2019-10-18',
          technical_status: '二类',
          weight: '16000',
          power_specifications: '162KW',
          remark_info: ''

        },
        {
          id: 2,
          number: '110-0001-0404',
          name: '轮式装载机',
          specifications: 'LG855',
          serial_number: 'LZ50C1203005',
          manufacture_date: '2017-07-01',
          manufacturer: '中国龙工控股有限公司',
          address: '搅拌站',
          user: '李先朋',
          original_value: '150000',
          purchase_date: '2012-10-15',
          entry_date: '2019-10-18',
          technical_status: '一类',
          weight: '16000',
          power_specifications: '162KW',
          remark_info: ''

        },
        {
          id: 1,
          number: '110-0001-0404',
          name: '轮式装载机',
          specifications: 'LG855',
          serial_number: 'LZ50C1203005',
          manufacture_date: '2017-07-01',
          manufacturer: '中国龙工控股有限公司',
          address: '搅拌站',
          user: '李先朋',
          original_value: '150000',
          purchase_date: '2012-10-15',
          entry_date: '2019-10-18',
          technical_status: '二类',
          weight: '16000',
          power_specifications: '162KW',
          remark_info: ''

        },
        {
          id: 2,
          number: '110-0001-0404',
          name: '轮式装载机',
          specifications: 'LG855',
          serial_number: 'LZ50C1203005',
          manufacture_date: '2017-07-01',
          manufacturer: '中国龙工控股有限公司',
          address: '搅拌站',
          user: '李先朋',
          original_value: '150000',
          purchase_date: '2012-10-15',
          entry_date: '2019-10-18',
          technical_status: '一类',
          weight: '16000',
          power_specifications: '162KW',
          remark_info: ''

        },
        {
          id: 1,
          number: '110-0001-0404',
          name: '轮式装载机',
          specifications: 'LG855',
          serial_number: 'LZ50C1203005',
          manufacture_date: '2017-07-01',
          manufacturer: '中国龙工控股有限公司',
          address: '搅拌站',
          user: '李先朋',
          original_value: '150000',
          purchase_date: '2012-10-15',
          entry_date: '2019-10-18',
          technical_status: '二类',
          weight: '16000',
          power_specifications: '162KW',
          remark_info: ''

        },
        {
          id: 2,
          number: '110-0001-0404',
          name: '轮式装载机',
          specifications: 'LG855',
          serial_number: 'LZ50C1203005',
          manufacture_date: '2017-07-01',
          manufacturer: '中国龙工控股有限公司',
          address: '搅拌站',
          user: '李先朋',
          original_value: '150000',
          purchase_date: '2012-10-15',
          entry_date: '2019-10-18',
          technical_status: '一类',
          weight: '16000',
          power_specifications: '162KW',
          remark_info: ''

        },
        {
          id: 1,
          number: '110-0001-0404',
          name: '轮式装载机',
          specifications: 'LG855',
          serial_number: 'LZ50C1203005',
          manufacture_date: '2017-07-01',
          manufacturer: '中国龙工控股有限公司',
          address: '搅拌站',
          user: '李先朋',
          original_value: '150000',
          purchase_date: '2012-10-15',
          entry_date: '2019-10-18',
          technical_status: '二类',
          weight: '16000',
          power_specifications: '162KW',
          remark_info: ''

        },
        {
          id: 2,
          number: '110-0001-0404',
          name: '轮式装载机',
          specifications: 'LG855',
          serial_number: 'LZ50C1203005',
          manufacture_date: '2017-07-01',
          manufacturer: '中国龙工控股有限公司',
          address: '搅拌站',
          user: '李先朋',
          original_value: '150000',
          purchase_date: '2012-10-15',
          entry_date: '2019-10-18',
          technical_status: '一类',
          weight: '16000',
          power_specifications: '162KW',
          remark_info: ''

        },
        {
          id: 1,
          number: '110-0001-0404',
          name: '轮式装载机',
          specifications: 'LG855',
          serial_number: 'LZ50C1203005',
          manufacture_date: '2017-07-01',
          manufacturer: '中国龙工控股有限公司',
          address: '搅拌站',
          user: '李先朋',
          original_value: '150000',
          purchase_date: '2012-10-15',
          entry_date: '2019-10-18',
          technical_status: '二类',
          weight: '16000',
          power_specifications: '162KW',
          remark_info: ''

        },
        {
          id: 2,
          number: '110-0001-0404',
          name: '轮式装载机',
          specifications: 'LG855',
          serial_number: 'LZ50C1203005',
          manufacture_date: '2017-07-01',
          manufacturer: '中国龙工控股有限公司',
          address: '搅拌站',
          user: '李先朋',
          original_value: '150000',
          purchase_date: '2012-10-15',
          entry_date: '2019-10-18',
          technical_status: '一类',
          weight: '16000',
          power_specifications: '162KW',
          remark_info: ''

        },
        {
          id: 1,
          number: '110-0001-0404',
          name: '轮式装载机',
          specifications: 'LG855',
          serial_number: 'LZ50C1203005',
          manufacture_date: '2017-07-01',
          manufacturer: '中国龙工控股有限公司',
          address: '搅拌站',
          user: '李先朋',
          original_value: '150000',
          purchase_date: '2012-10-15',
          entry_date: '2019-10-18',
          technical_status: '二类',
          weight: '16000',
          power_specifications: '162KW',
          remark_info: ''

        },
        {
          id: 2,
          number: '110-0001-0404',
          name: '轮式装载机',
          specifications: 'LG855',
          serial_number: 'LZ50C1203005',
          manufacture_date: '2017-07-01',
          manufacturer: '中国龙工控股有限公司',
          address: '搅拌站',
          user: '李先朋',
          original_value: '150000',
          purchase_date: '2012-10-15',
          entry_date: '2019-10-18',
          technical_status: '一类',
          weight: '16000',
          power_specifications: '162KW',
          remark_info: ''

        },
        {
          id: 1,
          number: '110-0001-0404',
          name: '轮式装载机',
          specifications: 'LG855',
          serial_number: 'LZ50C1203005',
          manufacture_date: '2017-07-01',
          manufacturer: '中国龙工控股有限公司',
          address: '搅拌站',
          user: '李先朋',
          original_value: '150000',
          purchase_date: '2012-10-15',
          entry_date: '2019-10-18',
          technical_status: '二类',
          weight: '16000',
          power_specifications: '162KW',
          remark_info: ''

        },
        {
          id: 2,
          number: '110-0001-0404',
          name: '轮式装载机',
          specifications: 'LG855',
          serial_number: 'LZ50C1203005',
          manufacture_date: '2017-07-01',
          manufacturer: '中国龙工控股有限公司',
          address: '搅拌站',
          user: '李先朋',
          original_value: '150000',
          purchase_date: '2012-10-15',
          entry_date: '2019-10-18',
          technical_status: '一类',
          weight: '16000',
          power_specifications: '162KW',
          remark_info: ''

        },
        {
          id: 1,
          number: '110-0001-0404',
          name: '轮式装载机',
          specifications: 'LG855',
          serial_number: 'LZ50C1203005',
          manufacture_date: '2017-07-01',
          manufacturer: '中国龙工控股有限公司',
          address: '搅拌站',
          user: '李先朋',
          original_value: '150000',
          purchase_date: '2012-10-15',
          entry_date: '2019-10-18',
          technical_status: '二类',
          weight: '16000',
          power_specifications: '162KW',
          remark_info: ''

        },
        {
          id: 2,
          number: '110-0001-0404',
          name: '轮式装载机',
          specifications: 'LG855',
          serial_number: 'LZ50C1203005',
          manufacture_date: '2017-07-01',
          manufacturer: '中国龙工控股有限公司',
          address: '搅拌站',
          user: '李先朋',
          original_value: '150000',
          purchase_date: '2012-10-15',
          entry_date: '2019-10-18',
          technical_status: '一类',
          weight: '16000',
          power_specifications: '162KW',
          remark_info: ''

        },
      ]
    }
  },
  methods: {
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
    }
  },
  //生命周期函数
  created() {
    this.$api.getGoodsList({
      page: 1
    })
    .then(res => {
      console.log(res.data);
    })
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