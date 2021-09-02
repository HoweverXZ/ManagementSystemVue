<template>
  <el-form :model="purchaseForm" :rules="rules" ref="purchaseForm" label-width="100px" class="demo-purchaseForm">
    <el-form-item label="姓名" prop="consumer">
      <el-input v-model="purchaseForm.consumer"></el-input>
    </el-form-item>
    <el-form-item label="型号规格" prop="modelspecification">
      <el-select v-model="purchaseForm.modelspecification" placeholder="请选择购买的型号">
        <el-option label="72V60A" value="72V60A"></el-option>
        <el-option label="60V48A" value="60V48A"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="电话号码" prop="contact">
      <el-input v-model="purchaseForm.contact"></el-input>
    </el-form-item>
    <el-form-item label="产品价格" prop="productprice">
      <el-input v-model="purchaseForm.productprice"></el-input>
    </el-form-item>
    <el-form-item label="付款金额" prop="paymentamount">
      <el-input v-model="purchaseForm.paymentamount"></el-input>
    </el-form-item>
    <el-form-item label="是否付定金" prop="deposit">
      <el-switch :active-value=true :inactive-value=false v-model="purchaseForm.deposit"></el-switch>
    </el-form-item>
    <el-form-item label="备注信息" prop="tips">
      <el-input type="textarea" v-model="purchaseForm.tips"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('purchaseForm')">添加</el-button>
      <el-button @click="resetForm('purchaseForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  import qs from 'qs';

  export default {
    name: 'addform',
    data() {
      return {
        purchaseForm: {
          consumer: '',
          modelspecification: '',
          contact: '',
          productprice: '',
          paymentamount: '',
          deposit: true,
          tips: ''
        },
        rules: {
          consumer: [
            {required: true, message: '请输入姓名', trigger: 'blur'},
            {min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur'}
          ],
          modelspecification: [
            {required: true, message: '请选择规格型号', trigger: 'change'}
          ],
          contact: [
            {required: true, message: '请输入电话号', trigger: 'blur'},
            {pattern: /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/, message: "请输入正确的电话号", trigger: "blur"}
          ],
          productprice: [
            {required: true, message: '请输入产品价格', trigger: 'blur'},
            {pattern: /^(([1-9]{1}\d*)|(0{1}))(\.\d{1,2})?$/, message: "请输入合法的金额数字，最多两位小数", trigger: "change"}
          ],
          paymentamount: [
            {required: true, message: '请输入已付款金额', trigger: 'blur'},
            {pattern: /^(([1-9]{1}\d*)|(0{1}))(\.\d{1,2})?$/, message: "请输入合法的金额数字，最多两位小数", trigger: "change"},
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (this.purchaseForm.productprice >= this.purchaseForm.paymentamount) {
            console.log(qs.stringify (this.purchaseForm))
            this.axios.post('http://localhost:7758/purchase', qs.stringify(this.purchaseForm)).then(this.opensucc).catch(function (err){
              alert("添加失败 可能是用户已存在 尝试搜索!")
            })
          } else {
            this.opendialog()
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      opensucc() {
        this.$notify({
          title: '成功',
          message: '添加成功！',
          type: 'success',
          duration: 3000
        });
      },
      opendialog() {
        this.$notify({
          title: '错误信息',
          message: '请检查输入项是否有误(金额是否有误)',
          type: 'warning',
          duration: 3000
        });
      },
    }
  }
</script>
