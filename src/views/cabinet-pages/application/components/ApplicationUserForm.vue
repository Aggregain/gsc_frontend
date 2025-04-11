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
            IELTS <span>{{ default_descr }}</span>
          </p>
          <DefaultInput placeholder="Введите балл" v-model="userForm.ielts" name="ielts" />
          <UploadDocumentInput v-model="userForm.ielts_doc" name="ielts_doc" />
        </el-col>
        <el-col :span="8">
          <p class="custom-label">
            SAT <span>{{ default_descr }}</span>
          </p>
          <DefaultInput placeholder="Введите балл" v-model="userForm.sat" name="sat" />
          <UploadDocumentInput v-model="userForm.sat_doc" name="sat_doc" />
        </el-col>
        <el-col :span="8">
          <p class="custom-label">
            GMAT <span>{{ default_descr }}</span>
          </p>
          <DefaultInput placeholder="Введите балл" v-model="userForm.gmat" name="gmat" />
          <UploadDocumentInput v-model="userForm.gmat_doc" name="gmat_doc" />
        </el-col>
        <el-col :span="24"><hr></el-col>
        <el-col :span="8">
          <p class="custom-label">
            TOEFL <span>{{ default_descr }}</span>
          </p>
          <DefaultInput placeholder="Введите балл" v-model="userForm.toefl" name="toefl" />
          <UploadDocumentInput v-model="userForm.toefl_doc" name="toefl_doc" />
        </el-col>
        <el-col :span="8">
          <p class="custom-label">
            GRE <span>{{ default_descr }}</span>
          </p>
          <DefaultInput placeholder="Введите балл" v-model="userForm.gre" name="gre" />
          <UploadDocumentInput v-model="userForm.gre_doc" name="gre_doc" />
        </el-col>
        <el-col :span="8">
          <p class="custom-label">
            DUOLINGO <span>{{ default_descr }}</span>
          </p>
          <DefaultInput placeholder="Введите балл" v-model="userForm.duolingo" name="duolingo" />
          <UploadDocumentInput v-model="userForm.duolingo_doc" name="duolingo_doc" />
        </el-col>
      </el-row>
    </el-form>
  </el-card>
</template>

<script>
import DefaultInput from "@/components/form/DefaultInput";
import UploadDocumentInput from "@/components/form/UploadDocumentInput";
import { mapGetters } from "vuex";

export default {
  components: {
    DefaultInput,
    UploadDocumentInput
  },
  data:()=>({
    rules: {},
    default_descr: 'Прикрепите PDF с результатом теста',
    user_info:{
      name: '',
    }
  }),
  computed: {
    ...mapGetters("UserModule", ["userForm", "isLoading"]),
  }
};
</script>
