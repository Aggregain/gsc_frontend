<template>
  <el-card shadow="never" v-loading="isLoading">
    <el-form ref="formRef" :model="userForm" :rules="rules" validateOnRuleChange>
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
            IELTS <span>{{ default_text }}</span>
          </p>
          <DefaultInput :readonly="readonly" placeholder="Введите балл" v-model="userForm.ielts_grade" name="ielts_grade" />
          <UploadAttachmentComponent :readonly="readonly" name="ielts_attachment" @getAttachments="getAttachments" />
        </el-col>
        <el-col :span="8">
          <p class="custom-label">
            SAT <span>{{ default_text }}</span>
          </p>
          <DefaultInput :readonly="readonly" placeholder="Введите балл" v-model="userForm.sat_grade" name="sat_grade" />
          <UploadAttachmentComponent :readonly="readonly" name="sat_attachment" @getAttachments="getAttachments" />
        </el-col>
        <el-col :span="8">
          <p class="custom-label">
            GMAT <span>{{ default_text }}</span>
          </p>
          <DefaultInput :readonly="readonly" placeholder="Введите балл" v-model="userForm.gmat_grade" name="gmat_grade" />
          <UploadAttachmentComponent :readonly="readonly" name="gmat_attachment" @getAttachments="getAttachments" />
        </el-col>
        <el-col :span="24"><hr></el-col>
        <el-col :span="8">
          <p class="custom-label">
            TOEFL <span>{{ default_text }}</span>
          </p>
          <DefaultInput :readonly="readonly" placeholder="Введите балл" v-model="userForm.toefl_grade" name="toefl_grade" />
          <UploadAttachmentComponent :readonly="readonly" name="toefl_attachment" @getAttachments="getAttachments" />
        </el-col>
        <el-col :span="8">
          <p class="custom-label">
            GRE <span>{{ default_text }}</span>
          </p>
          <DefaultInput :readonly="readonly" placeholder="Введите балл" v-model="userForm.gre_grade" name="gre_grade" />
          <UploadAttachmentComponent :readonly="readonly" name="gre_attachment" @getAttachments="getAttachments" />
        </el-col>
        <el-col :span="8">
          <p class="custom-label">
            DUOLINGO <span>{{ default_text }}</span>
          </p>
          <DefaultInput :readonly="readonly" placeholder="Введите балл" v-model="userForm.duolingo_grade" name="duolingo_grade" />
          <UploadAttachmentComponent :readonly="readonly" name="duolingo_attachment" @getAttachments="getAttachments" />
        </el-col>
      </el-row>
    </el-form>
  </el-card>
</template>

<script>
import DefaultInput from "@/components/form/DefaultInput";
import UploadAttachmentComponent from "./UploadAttachmentComponent";
import {mapActions, mapGetters} from "vuex";

export default {
  components: {
    DefaultInput,
    UploadAttachmentComponent
  },
  props:{
    readonly: Boolean
  },
  data:()=>({
    rules: {},
    default_text: 'Прикрепите PDF с результатом теста'
  }),
  computed: {
    ...mapGetters("UserModule", ["userForm", "isLoading"]),
  },
  methods: {
    ...mapActions("UserModule", ["GET_USER_ATTACHMENTS"]),

    getAttachments() {
      this.GET_USER_ATTACHMENTS();
    }
  }
};
</script>
