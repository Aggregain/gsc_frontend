<template>
  <el-row :gutter="30">
    <el-col :span="24">
      <h2 class="withMB">Чеклист по документам для студента</h2>
    </el-col>
    <el-col :span="24">
      <ApplicationDocumentsForm :readonly="true" />
      <ApplicationUserMainInfo v-loading="loading" :fullUserInfo="fullUserInfo" />
    </el-col>
    <ManagerActions @sendOffer="updateStatus" @sendComment="updateStatus" />
    <SuccessDialog v-if="successDialogShow" :completeDialogData="completeDialogData" />
  </el-row>
</template>

<script>
import { mapActions } from "vuex";
import ApplicationDocumentsForm from "@/views/cabinet-pages/application/components/ApplicationDocumentsForm";
import ApplicationUserMainInfo from "./components/ApplicationUserMainInfo";
import SuccessDialog from "@/views/cabinet-pages/application/components/SuccessDialog";
import ManagerActions from "./components/ManagerActions";

export default {
  components:{
    ApplicationDocumentsForm,
    ApplicationUserMainInfo,
    SuccessDialog,
    ManagerActions
  },
  data:()=>({
    loading: false,
    successDialogShow: false,
    completeDialogData: {
      title: '',
      description: '',
      route_name: 'ManagerApplications'
    },
    fullUserInfo: []
  }),
  computed: {
    applicationId() {
      return this.$route.params.application_id;
    },
  },
  methods: {
    ...mapActions("ApplicationModule", ["GET_APPLICATION_INFO", "UPDATE_APPLICATION_INFO"]),
    ...mapActions("UserModule", ["GET_USER_BY_ID"]),

    async getApplicationInfo(id){
      try {
        this.loading = true;
        const res = await this.GET_APPLICATION_INFO(id);
        if(res?.owner){
          try {
            const user_info = await this.GET_USER_BY_ID(res.owner);
            this.fullUserInfo = user_info;
          } catch {
            this.fullUserInfo = [];
          }
        }
      } catch {
        console.error("Ошибка при получении заявки");
      } finally {
        this.loading = false;
      }
    },
    async updateStatus(update_data) {
      try {
        const res = await this.UPDATE_APPLICATION_INFO({id: this.applicationId, update_data});
        if(res.success){
          if(update_data.status === 'ACCEPTED'){
            this.completeDialogData = {title: 'Заявка принята', description: 'Вы успешно приняли заявку студента'}
          }
          else if(update_data.status === "FOR_REVISION"){
            this.completeDialogData = {title: 'Заявка отправлена на доработку', description: 'Вы успешно отправили заявку студенту на доработку'}
          }
          else if(update_data.status === "DENIED"){
            this.completeDialogData = {title: 'Заявка отклонена', description: 'Вы успешно отклонили заявку студента'}
          }
          else if(update_data.status === "FOR_CONSIDERATION"){
            this.completeDialogData = {title: 'Задан статус: На рассмотрении в университете',description: ''}
          }
          else {
            this.completeDialogData = {title: 'Изменения успешно сохранены!',description: ''}
          }
          
          this.successDialogShow = true;
        }
      } catch {
        console.error('Ошибка при обновлении статуса');
      }
    }
  },
  created() {
    this.getApplicationInfo(this.applicationId);
  },
  beforeRouteUpdate(to, from, next) {
    if (to.params.application_id !== from.params.application_id) {
      this.getApplicationInfo(to.params.application_id);
    }
    next();
  }
}
</script>