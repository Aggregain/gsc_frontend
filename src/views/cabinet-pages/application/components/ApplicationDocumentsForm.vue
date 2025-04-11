<template>
  <el-card shadow="never" v-loading="isLoading">
    <el-form ref="formRef" :model="applicationForm" :rules="rules" validateOnRuleChange>
      <el-row :gutter="24">
        <el-col :span="24">
          <div class="headLabel">
            <div class="defaultIcon"><Icon icon="mage:file-2-fill"></Icon></div>
            <p>Документы</p>
          </div>
        </el-col>

        <el-col :span="24"><hr></el-col>
        <el-col :span="12">
          <UploadDocumentInput :readonly="readonly" v-model="applicationForm.document1" label="Транскрипт" descr="Транскрипт должен быть нотариально заверен" name="document1" />
        </el-col>
        <el-col :span="12">
          <UploadDocumentInput :readonly="readonly" v-model="applicationForm.document2" label="Мотивационное письмо" name="document2" />
        </el-col>
        <el-col :span="24"><hr></el-col>
        <el-col :span="12">
          <UploadDocumentInput :readonly="readonly" v-model="applicationForm.document3" label="Essay" name="document3" />
        </el-col>
        <el-col :span="12">
          <UploadDocumentInput :readonly="readonly" v-model="applicationForm.document4" label="Personal Statement" name="document4" />
        </el-col>
        <el-col :span="24"><hr></el-col>
        <el-col :span="12">
          <UploadDocumentInput :readonly="readonly" v-model="applicationForm.document5" label="Резюме" name="document5" />
        </el-col>
        <el-col :span="12">
          <UploadDocumentInput :readonly="readonly" v-model="applicationForm.document6" label="Портфолио" name="document6" />
        </el-col>
        <el-col :span="24"><hr></el-col>
        <el-col :span="12">
          <UploadDocumentInput :readonly="readonly" v-model="applicationForm.document7" label="Скан Паспорта" descr="Загрузите файл в формате PDF (.pdf)" name="document7" />
        </el-col>
        <el-col :span="12">
          <UploadDocumentInput :readonly="readonly" v-model="applicationForm.document8" label="Оплата депозита за обучение (Инвойс)" name="document8" />
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
  props:{
    readonly: Boolean
  },
  data:()=>({
    rules: {}
  }),
  computed: {
    ...mapGetters("ApplicationModule", ["applicationForm", "isLoading"]),
  }
};
</script>
