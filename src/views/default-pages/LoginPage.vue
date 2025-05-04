<template>
  <div class="default-container authPage height100">
    <el-row :gutter="30" align="middle">
      <el-col :span="9" class="text-center">
        <h1>Войти</h1>
        <el-form ref="formRef" :model="authForm" :rules="rules" validateOnRuleChange>
          <DefaultInput label="Email" placeholder="Введите вашу электронную почту" name="email" v-model="authForm.email" />
          <DefaultInput label="Пароль" placeholder="Введите пароль" name="password" v-model="authForm.password" />

          <router-link :to="{name: 'LoginPage'}" class="defaultLink">Забыли пароль?</router-link>

          <el-button type="primary" class="fullSize bigFS" @click="submitForm" :loading="isLoading">Войти</el-button>
          <el-button class="fullSize bigFS white--style"><GoogleIcon />Продолжить с Google</el-button>

          <p class="supportText">
            Еще не зарегистрированы? <router-link :to="{name: 'RegisterPage'}">Регистрация</router-link>
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
import { mapGetters, mapActions, mapMutations } from "vuex";
import DefaultInput from "@/components/form/DefaultInput";
import AuthImageComponent from "../default-components/AuthImageComponent"
import GoogleIcon from "@/components/icons/GoogleIcon"

export default {
  components:{
    DefaultInput,
    AuthImageComponent,
    GoogleIcon
  },
  data:()=>({
    rules: {
      email: [{ required: true, message: "Обязательное поле", trigger: "blur" }],
      password: [{ required: true, message: "Обязательное поле", trigger: "blur" }],
    }
  }),
  methods: {
    ...mapActions("AuthModule", ["ON_LOGIN"]),
    ...mapMutations('AuthModule', ['SET_TOKENS']),

    async submitForm() {
      this.$refs.formRef.validate(async (valid) => {
        if (valid) {
          const result = await this.ON_LOGIN();
          if (result.success) {
            this.SET_TOKENS(result.data);
            window.location = '/cabinet';
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