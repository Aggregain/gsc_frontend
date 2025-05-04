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
          <UploadAttachmentComponent :readonly="readonly" label="Транскрипт" descr="Транскрипт должен быть нотариально заверен" name="document1" />
        </el-col>
        <el-col :span="12">
          <UploadAttachmentComponent :readonly="readonly" label="Мотивационное письмо" name="document2" />
        </el-col>
        <el-col :span="24"><hr></el-col>
        <el-col :span="12">
          <UploadAttachmentComponent :readonly="readonly" label="Essay" name="document3" />
        </el-col>
        <el-col :span="12">
          <UploadAttachmentComponent :readonly="readonly" label="Personal Statement" name="document4" />
        </el-col>
        <el-col :span="24"><hr></el-col>
        <el-col :span="12">
          <UploadAttachmentComponent :readonly="readonly" label="Резюме" name="document5" />
        </el-col>
        <el-col :span="12">
          <UploadAttachmentComponent :readonly="readonly" label="Портфолио" name="document6" />
        </el-col>
        <el-col :span="24"><hr></el-col>
        <el-col :span="12">
          <UploadAttachmentComponent :readonly="readonly" label="Скан Паспорта" descr="Загрузите файл в формате PDF (.pdf)" name="document7" />
        </el-col>
        <el-col :span="12">
          <UploadAttachmentComponent :readonly="readonly" label="Оплата депозита за обучение (Инвойс)" name="document8" />
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
    rules: {}
  }),
  computed: {
    ...mapGetters("ApplicationModule", ["applicationInfo", "isLoading"]),
  }
};
</script>
