<template>
  <div class="default-container height100">
    <el-row :gutter="30" align="middle">
      <el-col :span="12">
        <h1>Войти</h1>
      </el-col>
      <el-col :span="12">
        <img src="@/assets/img/login.png" class="maxImage">
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  components:{
  },
  data:()=>({
    rules: {
      phone: [{ required: true, message: "Обязательное поле", trigger: "blur" }],
      password: [{ required: true, message: "Обязательное поле", trigger: "blur" }],
    }
  }),
  methods: {
    ...mapActions("AuthModule", ["ON_LOGIN"]),

    async submitForm() {
      this.$refs.formRef.validate(async (valid) => {
        if (valid) {
          await this.ON_LOGIN();
        }
      });
    }
  },
  computed: {
    ...mapGetters("AuthModule", ["authForm", "isLoading"])
  },
  created() {
  }
}
</script>