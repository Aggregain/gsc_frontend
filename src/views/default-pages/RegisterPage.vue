<template>
  <div class="default-container authPage height100">
    <el-row :gutter="30" align="middle">
      <el-col :span="9" class="text-center">
        <h1>Регистрация</h1>
        <el-form ref="formRef" :model="authForm" :rules="rules" validateOnRuleChange>
          <DefaultInput label="Имя" placeholder="Введите Имя" name="first_name" v-model="authForm.first_name" />
          <DefaultInput label="Email" placeholder="Введите вашу электронную почту" name="email" v-model="authForm.email" />
          <DefaultInput label="Номер телефона" placeholder="+7" name="phone_number" v-model="authForm.phone_number" />
          <DefaultInput label="Пароль" placeholder="Придумайте пароль" name="password" v-model="authForm.password" />

          <el-button type="primary" class="fullSize bigFS withMT" @click="submitForm">Зарегистрироваться</el-button>

          <p class="supportText">
            Уже зарегистрированы? <router-link :to="{name: 'LoginPage'}">Войти</router-link>
          </p>
        </el-form>
      </el-col>
      <el-col :span="12" :sm="{offset: 3}">
        <AuthImageComponent />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import DefaultInput from "@/components/form/DefaultInput";
import AuthImageComponent from "../default-components/AuthImageComponent"

export default {
  components:{
    DefaultInput,
    AuthImageComponent
  },
  data:()=>({
    rules: {
      first_name: [{ required: true, message: "Обязательное поле", trigger: "blur" }],
      email: [{ required: true, message: "Обязательное поле", trigger: "blur" }],
      phone_number: [{ required: true, message: "Обязательное поле", trigger: "blur" }],
      password: [{ required: true, message: "Обязательное поле", trigger: "blur" }],
    }
  }),
  methods: {
    ...mapActions("AuthModule", ["ON_REGISTER"]),

    async submitForm() {
      this.$refs.formRef.validate(async (valid) => {
        if (valid) {
          const result = await this.ON_REGISTER();
          if (result.success) {
            this.$router.push({ name: "LoginPage" });
          }
        }
      });
    }
  },
  computed: {
    ...mapGetters("AuthModule", ["authForm", "isLoading"])
  },
  created() {
  }
}
</script>