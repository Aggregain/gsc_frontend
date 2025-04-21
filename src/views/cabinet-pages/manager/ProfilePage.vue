<template>
  <el-row :gutter="30" id="managerPage">
    <el-col :span="24">
      <el-card shadow="never" v-loading="isLoading">
        <el-form ref="formRef" :model="userForm" :rules="rules" validateOnRuleChange>
          <el-row :gutter="24">
            <el-col :span="24">
              <div class="headLabel">
                <p>Ваши данные</p>
              </div>
              <ManagerUploadAvatar />
              <DefaultInput label="Имя" placeholder="Введите Имя" name="first_name" v-model="userForm.first_name" />
              <DefaultInput label="Фамилия" placeholder="Введите Фамилию" name="second_name" v-model="userForm.second_name" />
              <DefaultInput label="Отчество" placeholder="Введите Отчество" name="last_name" v-model="userForm.last_name" />
              <DefaultInput label="Номер телефона" placeholder="+7" name="phone_number" v-model="userForm.phone_number" />
            </el-col>
          </el-row>
        </el-form>
      </el-card>
    </el-col>
    <el-col :span="24">
      <el-button class="medium" type="primary" @click="submitForm" :loading="isLoading">Сохранить</el-button>
    </el-col>
  </el-row>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import DefaultInput from "@/components/form/DefaultInput";
import ManagerUploadAvatar from "@/components/form/ManagerUploadAvatar";

export default {
  components:{
    DefaultInput,
    ManagerUploadAvatar
  },
  data:()=>({
    rules: {
      first_name: [{ required: true, message: "Обязательное поле", trigger: "blur" }],
    },
  }),
  methods: {
    ...mapActions("UserModule", ["GET_USER_INFO", "UPDATE_USER_INFO"]),

    async submitForm() {
      this.$refs.formRef.validate(async (valid) => {
        if (valid) {
          await this.UPDATE_USER_INFO();
        }
      });
    }
  },
  computed: {
    ...mapGetters("UserModule", ["userForm", "isLoading"]),
  },
  created() {
    this.GET_USER_INFO();
  }
}
</script>