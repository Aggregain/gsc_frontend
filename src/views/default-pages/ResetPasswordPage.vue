<template>
  <div class="default-container authPage height100">
    <el-row :gutter="30" align="middle">
      <el-col :xs="{span: 24}" :span="12" :sm="{offset: 6}" class="text-center">
        <h1>Забыли пароль?</h1>
        <p class="descr">Введите адрес электронной почты, указанный при регистрации. Мы отправим вам ссылку для сброса пароля.</p>
        <el-form ref="formRef" :model="resetForm" :rules="rules" validateOnRuleChange>
          <DefaultInput label="Email" placeholder="Введите вашу электронную почту" name="email" v-model="resetForm.email" />
          <el-button type="primary" class="fullSize bigFS" @click="submitForm" :loading="isLoading">Отправить запрос</el-button>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import DefaultInput from "@/components/form/DefaultInput";

export default {
  components:{
    DefaultInput
  },
  data:()=>({
    resetForm: {
      email: ''
    },
    rules: {
      email: [{ required: true, message: "Обязательное поле", trigger: "blur" }]
    }
  }),
  methods: {
    ...mapActions("AuthModule", ["RESET_PASSWORD"]),

    async submitForm() {
      this.$refs.formRef.validate(async (valid) => {
        if (valid) {
          const result = await this.RESET_PASSWORD(this.resetForm.email);
          if (result.success) {
            this.$router.push({name: "LoginPage"});
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