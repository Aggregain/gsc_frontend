<template>
  <el-card shadow="never" v-loading="isLoading">
    <el-form ref="formRef" :model="form" :rules="rules" validateOnRuleChange>
      <el-row :gutter="24">
        <el-col :span="24">
          <div class="headLabel">
            <div class="defaultIcon"><Icon icon="mage:file-2-fill"></Icon></div>
            <p>Документы</p>
          </div>
        </el-col>

        <el-col :span="24"><hr></el-col>
        <el-col :span="12">
          <p class="custom-label">Транскрипт <span>Транскрипт должен быть нотариально заверен</span></p>
          <UploadAttachmentComponent :readonly="readonly" :application_id="applicationId" name="document1" />
        </el-col>
        <el-col :span="12">
          <p class="custom-label">Мотивационное письмо <span>{{ default_text }}</span></p>
          <UploadAttachmentComponent :readonly="readonly" :application_id="applicationId" name="document2" />
        </el-col>
        <el-col :span="24"><hr></el-col>
        <el-col :span="12">
          <p class="custom-label">Essay <span>{{ default_text }}</span></p>
          <UploadAttachmentComponent :readonly="readonly" :application_id="applicationId" name="document3" />
        </el-col>
        <el-col :span="12">
          <p class="custom-label">Personal Statement <span>{{ default_text }}</span></p>
          <UploadAttachmentComponent :readonly="readonly" :application_id="applicationId" name="document4" />
        </el-col>
        <el-col :span="24"><hr></el-col>
        <el-col :span="12">
          <p class="custom-label">Резюме <span>{{ default_text }}</span></p>
          <UploadAttachmentComponent :readonly="readonly" :application_id="applicationId" name="document5" />
        </el-col>
        <el-col :span="12">
          <p class="custom-label">Портфолио <span>{{ default_text }}</span></p>
          <UploadAttachmentComponent :readonly="readonly" :application_id="applicationId" name="document6" />
        </el-col>
        <el-col :span="24"><hr></el-col>
        <el-col :span="12">
          <p class="custom-label">Скан Паспорта <span>Загрузите файл в формате PDF (.pdf)</span></p>
          <UploadAttachmentComponent :readonly="readonly" :application_id="applicationId" name="document7" />
        </el-col>
        <el-col :span="12">
          <p class="custom-label">Оплата депозита за обучение (Инвойс) <span>{{ default_text }}</span></p>
          <UploadAttachmentComponent :readonly="readonly" :application_id="applicationId" name="document8" />
        </el-col>

      </el-row>
    </el-form>
  </el-card>
</template>

<script>
import UploadAttachmentComponent from "./UploadAttachmentComponent";
import { mapGetters } from "vuex";

export default {
  components: {
    UploadAttachmentComponent
  },
  props:{
    readonly: Boolean
  },
  data:()=>({
    form: {},
    rules: {},
    default_text: "Загрузите файл в формате Word (.docx) или PDF (.pdf)"
  }),
  computed: {
    ...mapGetters("ApplicationModule", ["isLoading"]),

    applicationId() {
      return this.$route.params.application_id;
    },
  }
};
</script>
