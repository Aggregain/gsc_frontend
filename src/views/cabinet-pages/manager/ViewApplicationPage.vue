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
  </el-row>
</template>

<script>
import { mapActions } from "vuex";
import ApplicationDocumentsForm from "@/views/cabinet-pages/application/components/ApplicationDocumentsForm";
import ApplicationUserMainInfo from "./components/ApplicationUserMainInfo";
import ManagerActions from "./components/ManagerActions";

export default {
  components:{
    ApplicationDocumentsForm,
    ApplicationUserMainInfo,
    ManagerActions
  },
  data:()=>({
    loading: false,
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
          this.$router.push({ name: "ManagerApplications" });
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