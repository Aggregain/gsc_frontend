<template>
  <el-card shadow="never" v-loading="isLoading">
    <el-form ref="formRef" :model="form" :rules="rules" validateOnRuleChange>
      <el-row :gutter="24">
        <el-col :span="24" v-if="activeApplicationInfo.status && !['DRAFT', 'ACCEPTED'].includes(activeApplicationInfo.status)">
          <ApplicationNotificationStatus
              :status="activeApplicationInfo.status"
              :comment="activeApplicationInfo.comment"
              :comment_file="activeApplicationInfo.comment_file"
          />
        </el-col>

        <el-col :span="24">
          <div class="headLabel">
            <div class="defaultIcon"><Icon icon="mage:file-2-fill"></Icon></div>
            <p>Документы</p>
          </div>
        </el-col>

        <el-col :span="24"><hr></el-col>
        <el-col :span="12">
          <p class="custom-label">Транскрипт <span>Транскрипт должен быть нотариально заверен</span></p>
          <UploadAttachmentComponent :readonly="readonly" :application_id="applicationId" :attachmentFile="attachmentsByName.doc_transcript" name="doc_transcript" @updateInfo="getApplicationInfo" />
        </el-col>
        <el-col :span="12">
          <p class="custom-label">Мотивационное письмо <span>{{ default_text }}</span></p>
          <UploadAttachmentComponent :readonly="readonly" :application_id="applicationId" :attachmentFile="attachmentsByName.doc_motivation_letter" name="doc_motivation_letter" @updateInfo="getApplicationInfo" />
        </el-col>
        <el-col :span="24"><hr></el-col>
        <el-col :span="12">
          <p class="custom-label">Essay <span>{{ default_text }}</span></p>
          <UploadAttachmentComponent :readonly="readonly" :application_id="applicationId" :attachmentFile="attachmentsByName.doc_essay" name="doc_essay" @updateInfo="getApplicationInfo" />
        </el-col>
        <el-col :span="12">
          <p class="custom-label">Personal Statement <span>{{ default_text }}</span></p>
          <UploadAttachmentComponent :readonly="readonly" :application_id="applicationId" :attachmentFile="attachmentsByName.doc_personal_statement" name="doc_personal_statement" @updateInfo="getApplicationInfo" />
        </el-col>
        <el-col :span="24"><hr></el-col>
        <el-col :span="12">
          <p class="custom-label">Резюме <span>{{ default_text }}</span></p>
          <UploadAttachmentComponent :readonly="readonly" :application_id="applicationId" :attachmentFile="attachmentsByName.doc_resume" name="doc_resume" @updateInfo="getApplicationInfo" />
        </el-col>
        <el-col :span="12">
          <p class="custom-label">Портфолио <span>{{ default_text }}</span></p>
          <UploadAttachmentComponent :readonly="readonly" :application_id="applicationId" :attachmentFile="attachmentsByName.doc_portfolio" name="doc_portfolio" @updateInfo="getApplicationInfo" />
        </el-col>
        <el-col :span="24"><hr></el-col>
        <el-col :span="12">
          <p class="custom-label">Скан Паспорта <span>Загрузите файл в формате PDF (.pdf)</span></p>
          <UploadAttachmentComponent :readonly="readonly" :application_id="applicationId" :attachmentFile="attachmentsByName.doc_passport_scan" name="doc_passport_scan" @updateInfo="getApplicationInfo" />
        </el-col>
        <el-col :span="12">
          <p class="custom-label">Оплата депозита за обучение (Инвойс) <span>{{ default_text }}</span></p>
          <UploadAttachmentComponent :readonly="readonly" :application_id="applicationId" :attachmentFile="attachmentsByName.doc_deposit_invoice" name="doc_deposit_invoice" @updateInfo="getApplicationInfo" />
        </el-col>
        <el-col :span="24"><hr></el-col>
        <el-col :span="24">
          <p class="custom-label">Дополнительные файлы <span>При необходимости загрузите один или несколько дополнительных файлов.</span></p>
          <div class="additionalFileItem" v-for="(file, index) in additionalFiles" :key="file.id || index" >
            <UploadAttachmentComponent :readonly="readonly" :application_id="applicationId" :attachmentFile="file" name="additional_file" @updateInfo="getApplicationInfo" />
          </div>

          <div class="additionalFileItem">
            <UploadAttachmentComponent :readonly="readonly" :application_id="applicationId" :attachmentFile="null" name="additional_file" @updateInfo="getApplicationInfo" />
          </div>
        </el-col>

      </el-row>
    </el-form>
  </el-card>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import ApplicationNotificationStatus from "./ApplicationNotificationStatus";
import UploadAttachmentComponent from "./UploadAttachmentComponent";

export default {
  components: {
    ApplicationNotificationStatus,
    UploadAttachmentComponent
  },
  props:{
    readonly: {
      type: Boolean,
      default: true
    }
  },
  data:()=>({
    form: {},
    rules: {},
    default_text: "Загрузите файл в формате Word (.docx) или PDF (.pdf)"
  }),
  computed: {
    ...mapGetters("ApplicationModule", ["activeApplicationInfo", "isLoading"]),
    applicationId() {
      return this.$route.params.application_id;
    },
    attachmentsByName() {
      const list = this.activeApplicationInfo?.attachments || [];

      return list.reduce((acc, attachment) => {
        acc[attachment.name] = attachment;
        return acc;
      }, {});
    },
    additionalFiles() {
      const list = this.activeApplicationInfo?.attachments || [];
      return list.filter((a) => a.name === "additional_file");
    }
  },
  methods: {
    ...mapActions("ApplicationModule", ["GET_APPLICATION_INFO"]),

    getApplicationInfo(){
      this.GET_APPLICATION_INFO(this.applicationId);
    }
  }
};
</script>
