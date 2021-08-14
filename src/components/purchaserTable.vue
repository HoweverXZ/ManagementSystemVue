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
        width="140">
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
          <el-popover
            placement="bottom"
            width="150"
            trigger="hover"
            content="查看用户详细信息"
            :open-delay=300>
            <el-button slot="reference" type="info" icon="el-icon-search" circle></el-button>
          </el-popover>
          <el-popover
            placement="bottom"
            width="150"
            trigger="hover"
            content="编辑订单信息"
            :open-delay=300>
            <el-button slot="reference" type="primary" icon="el-icon-edit"></el-button>
          </el-popover>
        </template>
      </el-table-column>
    </el-table>
    <el-row>
      <el-col class="buttoncow" style="text-align: right">
        <el-button type="primary" round @click="dialogVisible=true">添加新订单</el-button>
      </el-col>
    </el-row>
    <div class=>
      <el-dialog title="提示" :visible.sync="dialogVisible" :before-close="handleClose">
        <addform></addform>
        <el-button @click="dialogVisible = false" circle>取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </el-dialog>
    </div>
  </div>
</template>

<style>
  @import "../styles/purchaseTableStyle.css";
</style>

<script>
  import Addform from "./purchaseaddform";
  export default {
    name: 'purchaseTable',
    components: {Addform},
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
        search: '',
        dialogVisible: false,
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
      },
      handleClose(done) {
        this.$confirm('确定关闭吗').then(() => {
          // function(done)，done 用于关闭 Dialog
          done();
          console.info("点击右上角 'X' ，取消按钮或遮罩层时触发");
        }).catch(() => {
          console.log("点击确定时触发");
        });
      }
    }
  }
</script>


