<template>
  <div class="default-container authPage height100">
    <el-row :gutter="30" align="middle">
      <el-col :span="9" class="text-center">
        <h1>Регистрация</h1>
        <el-form ref="formRef" :model="authForm" :rules="rules" validateOnRuleChange>
          <DefaultInput label="ФИО" placeholder="Введите ваше ФИО" name="name" v-model="authForm.name" />
          <DefaultInput label="Email" placeholder="Введите вашу электронную почту" name="email" v-model="authForm.email" />
          <DefaultInput label="Номер телефона" placeholder="+7" name="phone" v-model="authForm.phone" />
          <DefaultInput label="Пароль" placeholder="Придумайте пароль" name="password" v-model="authForm.password" />

          <el-button type="primary" class="fullSize bigFS withMT">Зарегистрироваться</el-button>

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
      name: [{ required: true, message: "Обязательное поле", trigger: "blur" }],
      email: [{ required: true, message: "Обязательное поле", trigger: "blur" }],
      phone: [{ required: true, message: "Обязательное поле", trigger: "blur" }],
      password: [{ required: true, message: "Обязательное поле", trigger: "blur" }],
    }
  }),
  methods: {
    ...mapActions("AuthModule", ["ON_LOGIN"]),

    async submitForm() {
      this.$refs.formRef.validate(async (valid) => {
        if (valid) {
          await this.ON_LOGIN();
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