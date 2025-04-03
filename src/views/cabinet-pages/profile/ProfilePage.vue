<template>
  <el-row :gutter="30">
    <el-col :span="24">
      <el-card shadow="never">
        <el-form ref="formRef" :model="userForm" :rules="rules" validateOnRuleChange>
          <el-tabs v-model="activeTab">
            <el-tab-pane v-for="tab in tabs" :key="tab.name" :label="tab.label" :name="tab.name" :disabled="tab.disabled">
              <template #label>
                <el-badge v-if="tab.disabled" value="coming soon"  type="success">
                  <span>{{ tab.label }}</span>
                </el-badge>
                <span v-else>{{ tab.label }}</span>
              </template>
              <div class="defaultAlertBlock">
                <Icon icon="material-symbols:info-rounded"></Icon>
                <div class="content">
                  <p class="title">Вы можете редактировать профиль в любое время</p>
                  <p class="text">Данные профиля используются при поиске и подаче заявок в университет</p>
                </div>
              </div>
              <component :is="tab.component" v-model="userForm" v-if="!tab.disabled" />
            </el-tab-pane>
          </el-tabs>
        </el-form>
      </el-card>
    </el-col>
    <el-col :span="24">
      <el-alert v-if="formError" type="error" title="Ошибка" :description="formError" show-icon />
      <el-button class="medium" type="primary" @click="submitForm" :loading="loading">Сохранить</el-button>
    </el-col>
  </el-row>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ProfileForm from "./components/ProfileForm";
import QualificationsForm from "./components/QualificationsForm";
import ProgramsForm from "./components/ProgramsForm";

export default {
  components:{
    ProfileForm,
    QualificationsForm,
    ProgramsForm
  },
  data:()=>({
    activeTab: 'tab1',
    tabs: [
      { name: 'tab1', label: 'Мои данные', component: 'ProfileForm', disabled: false },
      { name: 'tab2', label: 'Квалификации', component: 'QualificationsForm', disabled: false },
      { name: 'tab3', label: 'Тип программы', component: 'ProgramsForm', disabled: false },
      { name: 'tab4', label: 'AI', disabled: true },
    ],
    rules: {
      name: [{ required: true, message: "Обязательное поле", trigger: "blur" }],
      birthday: [{ required: true, message: "Обязательное поле", trigger: "blur" }],
      country: [{ required: true, message: "Обязательное поле", trigger: "change" }],
    }
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
    ...mapGetters("UserModule", ["userForm", "formError", "isLoading"]),
    loading() {
      return this.isLoading;
    }
  },
  created() {
    // this.GET_USER_INFO();
  }
}
</script>