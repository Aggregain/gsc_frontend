<template>
  <el-row :gutter="30">
    <el-col :span="24">
      <h2 class="withMB">Чеклист по документам для студента</h2>
    </el-col>
    <el-col :span="24">
      <ApplicationDocumentsForm :readonly="readonly" ref="documentsFormRef" />
      <ApplicationUserForm :readonly="readonly" ref="userFormRef" />
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
    readonly: false,
  }),
  computed: {
    ...mapGetters('ApplicationModule', { applicationIsReady: 'isReady' }),
    ...mapGetters('UserModule', { userIsReady: 'isReady' }),

    isSubmitDisabled() {
      return !(this.applicationIsReady && this.userIsReady);
    },
    applicationId() {
      return this.$route.params.application_id;
    },
  },
  methods: {
    ...mapActions("ApplicationModule", ["GET_APPLICATION_INFO", "UPDATE_APPLICATION_INFO"]),
    ...mapActions("UserModule", ["GET_USER_INFO", "UPDATE_USER_INFO", "GET_USER_ATTACHMENTS"]),

    async submitForms() {
      try {
        const documentsFormValid = await this.$refs.documentsFormRef.$refs.formRef.validate();
        const userFormValid = await this.$refs.userFormRef.$refs.formRef.validate();

        if (documentsFormValid && userFormValid) {
          const [appResponse, profileResponse] = await Promise.all([
            this.UPDATE_USER_INFO(),
            this.UPDATE_APPLICATION_INFO({ id: this.applicationId, status: "IN_PROGRESS" }),
          ]);

          if (appResponse.success && profileResponse.success) {
            this.$router.push({ name: "Applications" });
          }
        }
      } catch (err) {
        console.error("Ошибка при отправке:", err);
      }
    }
  },
  created() {
    this.GET_USER_INFO();
    this.GET_USER_ATTACHMENTS();
    this.GET_APPLICATION_INFO(this.applicationId);

    // TODO Использовать для менеджера
    // if (manager) {
    //   this.readonly = true;
    // }
  },
  beforeRouteUpdate(to, from, next) {
    if (to.params.application_id !== from.params.application_id) {
      this.GET_USER_INFO();
      this.GET_USER_ATTACHMENTS();
      this.GET_APPLICATION_INFO(to.params.application_id);
    }
    next();
  }
}
</script>