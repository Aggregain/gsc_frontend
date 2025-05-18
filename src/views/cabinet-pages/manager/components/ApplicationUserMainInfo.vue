<template>
  <el-card shadow="never">
    <el-row :gutter="24">
      <el-col :span="24">
        <div class="headLabel">
          <div class="defaultIcon"><Icon icon="healthicons:i-exam-multiple-choice"></Icon></div>
          <p>Тесты</p>
        </div>
      </el-col>
      <el-col :span="24"><hr></el-col>
      <el-col :span="8">
        <p class="custom-label">
          IELTS: {{ fullUserInfo?.ielts_grade || 'Нет' }}
        </p>
        <UploadAttachmentComponent :readonly="true" :attachmentFile="attachmentsByName.ielts_attachment" name="ielts_attachment" />
      </el-col>
      <el-col :span="8">
        <p class="custom-label">
          SAT: {{ fullUserInfo?.sat_grade || 'Нет' }}
        </p>
        <UploadAttachmentComponent :readonly="true" :attachmentFile="attachmentsByName.sat_attachment" name="sat_attachment" />
      </el-col>
      <el-col :span="8">
        <p class="custom-label">
          GMAT: {{ fullUserInfo?.gmat_grade || 'Нет' }}
        </p>
        <UploadAttachmentComponent :readonly="true" :attachmentFile="attachmentsByName.gmat_attachment" name="gmat_attachment" />
      </el-col>
      <el-col :span="24"><hr></el-col>
      <el-col :span="8">
        <p class="custom-label">
          TOEFL: {{ fullUserInfo?.toefl_grade || 'Нет' }}
        </p>
        <UploadAttachmentComponent :readonly="true" :attachmentFile="attachmentsByName.toefl_attachment" name="toefl_attachment" />
      </el-col>
      <el-col :span="8">
        <p class="custom-label">
          GRE: {{ fullUserInfo?.gre_grade || 'Нет' }}
        </p>
        <UploadAttachmentComponent :readonly="true" :attachmentFile="attachmentsByName.gre_attachment" name="gre_attachment" />
      </el-col>
      <el-col :span="8">
        <p class="custom-label">
          DUOLINGO: {{ fullUserInfo?.duolingo_grade || 'Нет' }}
        </p>
        <UploadAttachmentComponent :readonly="true" :attachmentFile="attachmentsByName.duolingo_attachment" name="duolingo_attachment" />
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import UploadAttachmentComponent from "@/views/cabinet-pages/application/components/UploadAttachmentComponent";

export default {
  components: {
    UploadAttachmentComponent
  },
  props: {
    fullUserInfo: Object
  },
  computed: {
    attachmentsByName() {
      const list = this.fullUserInfo.attachments || [];

      return list.reduce((acc, attachment) => {
        acc[attachment.name] = attachment;
        return acc;
      }, {});
    }
  }
};
</script>
