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
  export default {
    name: ""
  }
</script>

<style scoped>

</style>
