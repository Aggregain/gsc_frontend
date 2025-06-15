<template>
  <div class="default-container authPage height100">
    <el-row :gutter="30" align="middle">
      <el-col :xs="{span: 24}" :span="12" :sm="{offset: 6}" class="text-center">
        <h1>Введите новый пароль</h1>
        <el-form ref="formRef" :model="resetForm" :rules="rules" validateOnRuleChange>
          <DefaultInput label="Новый пароль" placeholder="Введите новый пароль" name="password" type="password" v-model="resetForm.password" />
          <el-button type="primary" class="fullSize bigFS" @click="submitForm" :loading="isLoading">Сохранить</el-button>
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
      password: '',
      token: '',
      uidb64: ''
    },
    rules: {
      password: [{ required: true, message: "Обязательное поле", trigger: "blur" }],
    }
  }),
  methods: {
    ...mapActions("AuthModule", ["CONFIRM_RESET_PASSWORD"]),

    async submitForm() {
      this.$refs.formRef.validate(async (valid) => {
        if (valid) {
          this.resetForm.token = this.$route.params.reset_token;
          this.resetForm.uidb64 = this.$route.params.reset_uid;
          const result = await this.CONFIRM_RESET_PASSWORD(this.resetForm);
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