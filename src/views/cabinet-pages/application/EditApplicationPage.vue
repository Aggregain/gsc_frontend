<template>
  <el-row :gutter="30">
    <el-col :span="24">
      <h2 class="withMB">Чеклист по документам для студента</h2>
    </el-col>
    <el-col :span="24">
      <ApplicationDocumentsForm :readonly="this.readonly" ref="documentsFormRef" />
      <ApplicationUserForm :readonly="this.readonly" ref="userFormRef" />
    </el-col>
    <StudentActions @updateStatus="updateStatus" />
    <SuccessDialog v-if="successDialogShow" :completeDialogData="completeDialogData" />
  </el-row>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import ApplicationDocumentsForm from "./components/ApplicationDocumentsForm";
import ApplicationUserForm from "./components/ApplicationUserForm";
import StudentActions from "./components/UserActions";
import SuccessDialog from "./components/SuccessDialog";

export default {
  components:{
    ApplicationDocumentsForm,
    ApplicationUserForm,
    StudentActions,
    SuccessDialog,
  },
  data:()=>({
    successDialogShow: false,
    completeDialogData: {
      title: 'Ваша заявка успешно отправлена!',
      description: 'Менеджер свяжется с вами в ближайшее время для дальнейших шагов',
      route_name: 'Applications'
    }
  }),
  computed: {
    ...mapGetters("ApplicationModule", ["activeApplicationInfo", "isLoading"]),

    readonly() {
      const status = this.activeApplicationInfo?.status;
      return !(status === "FOR_CONSIDERATION" || status === "DRAFT");
    },
    applicationId() {
      return this.$route.params.application_id;
    },
  },
  methods: {
    ...mapActions("ApplicationModule", ["GET_APPLICATION_INFO", "UPDATE_APPLICATION_INFO"]),
    ...mapActions("UserModule", ["GET_USER_INFO", "UPDATE_USER_INFO", "GET_USER_ATTACHMENTS"]),

    async updateStatus(update_data) {
      try {
        const documentsFormValid = await this.$refs.documentsFormRef.$refs.formRef.validate();
        const userFormValid = await this.$refs.userFormRef.$refs.formRef.validate();

        if (documentsFormValid && userFormValid) {
          const profileResponse = await this.UPDATE_USER_INFO();

          if (profileResponse.success) {
            const appResponse = await this.UPDATE_APPLICATION_INFO({ id: this.applicationId, update_data: update_data,});

            if (appResponse.success) {
              this.successDialogShow = true;
            }
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