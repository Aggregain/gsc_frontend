<template>
  <el-row :gutter="30">
    <el-col :span="24">
      <h2 class="withMB">Чеклист по документам для студента</h2>
    </el-col>
    <el-col :span="24">
      <ApplicationDocumentsForm ref="documentsFormRef" />
      <ApplicationUserForm ref="userFormRef" />
    </el-col>
    <el-col :span="24">
      <el-button class="medium" type="primary" @click="submitForms" :loading="isSubmitDisabled">Отправить</el-button>
    </el-col>
  </el-row>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ApplicationDocumentsForm from "./components/ApplicationDocumentsForm";
import ApplicationUserForm from "./components/ApplicationUserForm";

export default {
  components:{
    ApplicationDocumentsForm,
    ApplicationUserForm
  },
  data:()=>({
    rules: {}
  }),
  methods: {
    ...mapActions("ApplicationModule", ["GET_APPLICATION_INFO", "UPDATE_APPLICATION_INFO"]),
    ...mapActions("UserModule", ["GET_USER_INFO", "UPDATE_USER_INFO"]),
    async submitForms() {
      try {
        const documentsFormValid = await this.$refs.documentsFormRef.$refs.formRef.validate();
        const userFormValid = await this.$refs.userFormRef.$refs.formRef.validate();

        if (documentsFormValid && userFormValid) {
          const [appResponse, profileResponse] = await Promise.all([
            this.UPDATE_APPLICATION_INFO(),
            this.UPDATE_USER_INFO(),
          ]);

          if (appResponse.success && profileResponse.success) {
            this.$router.push({ name: "HomePage" });
          }
        } else {
          console.log('Пожалуйста, исправьте ошибки в формах.');
        }
      } catch (err) {
        console.error("Ошибка при отправке:", err);
      }
    }
  },
  computed: {
    ...mapGetters('ApplicationModule', { applicationIsReady: 'isReady' }),
    ...mapGetters('UserModule', { userIsReady: 'isReady' }),
    isSubmitDisabled() {
      return !(this.applicationIsReady && this.userIsReady);
    },
  },
  created() {
    // this.GET_APPLICATION_INFO();
    // this.GET_USER_INFO();
  }
}
</script>