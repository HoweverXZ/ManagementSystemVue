<template>
  <div>
    <el-table
      :data="tableData.filter(data => !search || data.contact.toLowerCase().includes(search.toLowerCase())||data.consumer.toLowerCase().includes(search.toLowerCase()))"
      style="width: 110%"
      :row-class-name="colorChanger"
      >
      <el-table-column
        fixed
        prop="purchasetime"
        label="购买时间"
        width="160">
      </el-table-column>
      <el-table-column
        prop="modelspecification"
        label="型号规格"
        width="80">
      </el-table-column>
      <el-table-column
        prop="consumer"
        label="消费者"
        width="90">
      </el-table-column>
      <el-table-column
        prop="contact"
        label="联系方式"
        width="120">
      </el-table-column>
      <el-table-column
        sortable
        prop="productprice"
        label="产品价格"
        width="120">
      </el-table-column>
      <el-table-column
        prop="paymentamount"
        label="付款金额"
        width="100">
      </el-table-column>
      <el-table-column
        prop="deposit"
        label="是否付定金"
        sortable
        width="120"
      >
        <template slot-scope="scope">
          <p v-if="scope.row.deposit==true">
            <el-button type="success" icon="el-icon-circle-check"></el-button>
          </p>
          <p v-if="scope.row.deposit==false">
            <el-button type="danger" icon="el-icon-circle-close"></el-button>
          </p>
        </template>
      </el-table-column>
      <el-table-column
        prop="arrears"
        label="欠款"
        width="100">
      </el-table-column>
      <el-table-column
        prop="tips"
        label="备注"
        width="100">
      </el-table-column>
      <el-table-column>
        <template slot="header" slot-scope="scope">
          <el-input
            v-model="search"
            size="mini"
            placeholder="输入关键字搜索"
          />
        </template>
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style>
  .el-table .obey_row {
    background: oldlace;
  }

  .el-table .donnotobey_row {
    background: #f0f9eb;
  }
</style>

<script>

  export default {
    name: 'purchaseTable',
    data() {
      return {
        tableData: [{
          purchasetime: '',
          modelspecification: '',
          consumer: '',
          contact: '',
          productprice: '',
          paymentamount: '',
          deposit: '',
          arrears: '',
          tips: '',
        }],
        search: ''
      }
    },
    created() {
      this.axios.get("http://localhost:7758/purchase")
        .then((response) => {
          this.tableData = response.data
          console.log(response.data)
        }).catch(function (err) {
        console.log(err)
      })
    },
    methods: {
      colorChanger({row, rowIndex}) {
        if (row.deposit == true) {
          return 'donnotobey_row';
        } else if (row.deposit == false) {
          return 'obey_row';
        }
        return '';
      }
    }
  }
</script>


