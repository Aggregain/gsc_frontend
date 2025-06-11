<template>
  <div class="default-container">
    <el-row :gutter="30" align="middle">
      <el-col :span="12">
        <div class="logo">
          <img src="@/assets/logo.png" alt="Logo">
        </div>
      </el-col>
      <el-col :xs="{span: 0}" :span="12" class="text-right">
        <el-button type="primary" @click="routerPush('LoginPage')" class="medium-second" plain>Войти</el-button>
        <el-button type="primary" @click="routerPush('RegisterPage')" class="medium-second">Зарегистрироваться</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods:{
    routerPush(route_name){
      this.$router.push({ name: route_name });
    }
  }
}
</script>
