<template>
  <el-row :gutter="24">
    <el-col :span="4">
      <UploadAvatar v-model="computedUserForm.avatar" label="Фото профиля" name="avatar" />
    </el-col>
    <el-col :span="10">
      <DefaultInput label="Имя" placeholder="Введите Имя" name="first_name" v-model="computedUserForm.first_name" />
      <DefaultInput label="Фамилия" placeholder="Введите Фамилию" name="second_name" v-model="computedUserForm.second_name" />
      <DefaultInput label="Отчество" placeholder="Введите Отчество" name="last_name" v-model="computedUserForm.last_name" />
      <DefaultInput label="Дата рождения" placeholder="дд.мм.гггг" name="birth_date" v-model="computedUserForm.birth_date" />
    </el-col>
    <el-col :span="10">
      <DefaultInput label="Номер телефона" placeholder="+7" name="phone_number" v-model="computedUserForm.phone_number" />
      <DefaultSelect
          v-model="computedUserForm.country"
          label="Страна проживания"
          name="country"
          placeholder="Выберите страну"
          :options="[
            { label: 'Опция 1', value: 'option1' },
            { label: 'Опция 2', value: 'option2' }
          ]"
      />
      <DefaultSelect
          v-model="computedUserForm.school"
          label="Учебное заведение"
          name="school"
          :options="[
            { label: 'Опция 1', value: 'option1' },
            { label: 'Опция 2', value: 'option2' }
          ]"
      />
      <DefaultSelect
          v-model="computedUserForm.city"
          label="Город проживания"
          name="city"
          placeholder="Выберите город"
          :options="[
            { label: 'Опция 1', value: 'option1' },
            { label: 'Опция 2', value: 'option2' }
          ]"
      />
    </el-col>
  </el-row>
</template>

<script>
import DefaultInput from "@/components/form/DefaultInput";
import DefaultSelect from "@/components/form/DefaultSelect";
import UploadAvatar from "@/components/form/UploadAvatar";

export default {
  components: {
    DefaultInput,
    DefaultSelect,
    UploadAvatar,
  },
  props:{
    modelValue: Object
  },
  computed: {
    computedUserForm: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  }
};
</script>
