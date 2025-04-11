<template>
  <el-card shadow="never" v-loading="this.loading">
    <el-form ref="formRef" :model="applicationForm" :rules="rules" validateOnRuleChange>
      <el-row :gutter="24">
        <el-col :span="24">
          <div class="headLabel">
            <div class="defaultIcon"><Icon icon="mage:file-2-fill"></Icon></div>
            <p>Документы</p>
          </div>
        </el-col>
        <el-col :span="24">
          <UploadDocumentInput v-model="applicationForm.document1" label="Фото профиля" name="avatar" />
        </el-col>
      </el-row>
    </el-form>
  </el-card>
</template>

<script>
import UploadDocumentInput from "@/components/form/UploadDocumentInput";
import { mapGetters } from "vuex";

export default {
  components: {
    UploadDocumentInput
  },
  data:()=>({
    rules: {}
  }),
  computed: {
    ...mapGetters("ApplicationModule", ["applicationForm", "isLoading"]),
    loading() {
      return this.isLoading;
    }
  }
};
</script>
