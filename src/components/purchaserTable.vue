<template>
  <div>
    <el-table
      :data="tableData.filter(data => !search || data.contact.toLowerCase().includes(search.toLowerCase())||data.consumer.toLowerCase().includes(search.toLowerCase()))"
      style="width: 110%;height: 700px"
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
        width="100"
        sortable>
      </el-table-column>
      <el-table-column
        prop="tips"
        label="备注"
        width="140"
        show-overflow-tooltip=“true”
      >
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
          <el-popconfirm
            confirm-button-text='确定'
            cancel-button-text='取消'
            icon="el-icon-info"
            icon-color="red"
            @confirm="del(scope.row.contact)"
            title="删除后无法复原 确定要删除吗？"
          >
            <el-button slot="reference" type="danger" icon="el-icon-delete"></el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <el-row>
      <el-col class="buttoncow" style="text-align: right">
        <el-button type="primary" round @click="dialogVisible=true">添加新订单</el-button>
      </el-col>
    </el-row>
    <el-dialog title="提示" :visible.sync="dialogVisible" :before-close="handleClose">
      <addform></addform>
    </el-dialog>
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
      colorChanger({row}) {
        if (row.deposit == true) {
          return 'donnotobey_row';
        } else if (row.deposit == false) {
          return 'obey_row';
        }
        return '';
      },
      handleClose(done) {
        this.$confirm('确定关闭会丢失已经输入的信息').then(() => {
          // function(done)，done 用于关闭 Dialog
          done();
          console.info("点击右上角 'X' ，取消按钮或遮罩层时触发");
        }).catch(() => {
          console.log("点击确定时触发");
        });
      },
      del(contact) {
        if (contact!=null){
        this.axios.delete("http://localhost:7758/purchase", {
          params: {
            contact: contact
          }
        }).then(alert("删除成功！")).catch(function (err){
          console.log(err)
          alert("出现问题请联系开发者")
        })}else {
          alert("出现问题请联系开发者")
        }

      },
      logtest(test){
        console.log(test)
      }
    }
  }
</script>


