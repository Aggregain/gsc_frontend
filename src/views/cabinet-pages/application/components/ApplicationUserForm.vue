<template>
  <el-card shadow="never" v-loading="this.loading">
    <el-form ref="formRef" :model="userForm" :rules="rules" validateOnRuleChange>
      <el-row :gutter="24">
        <el-col :span="24">
          <div class="headLabel">
            <div class="defaultIcon"><Icon icon="healthicons:i-exam-multiple-choice"></Icon></div>
            <p>Тесты</p>
          </div>
        </el-col>
        <el-col :span="24">
          <UploadDocumentInput v-model="userForm.ielts_doc" label="Фото профиля" name="avatar" />
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
    ...mapGetters("UserModule", ["userForm", "isLoading"]),
    loading() {
      return this.isLoading;
    }
  }
};
</script>
