<template>
  <el-row :gutter="24">
    <el-col :xs={span:24} :span="4">
      <UploadAvatar />
    </el-col>
    <el-col :xs={span:24} :span="10">
      <DefaultInput label="Имя" placeholder="Введите Имя" name="first_name" v-model="computedUserForm.first_name" />
      <DefaultInput label="Фамилия" placeholder="Введите Фамилию" name="second_name" v-model="computedUserForm.second_name" />
      <DefaultInput label="Отчество" placeholder="Введите Отчество" name="last_name" v-model="computedUserForm.last_name" />
      <DatePicker label="Дата рождения" placeholder="дд.мм.гггг" name="birth_date" v-model="computedUserForm.birth_date" />
    </el-col>
    <el-col :xs={span:24} :span="10">
      <DefaultInput label="Номер телефона" placeholder="+7" name="phone_number" v-model="computedUserForm.phone_number" />
<!--      <DefaultSelect-->
<!--          v-model="computedUserForm.country"-->
<!--          label="Страна проживания"-->
<!--          name="country"-->
<!--          placeholder="Выберите страну"-->
<!--          :loading="dictionaryLoading"-->
<!--          :options="dictionaryList.countries"-->
<!--      />-->
      <DefaultSelect
          v-model="computedUserForm.city"
          label="Город проживания"
          name="city"
          placeholder="Выберите город"
          :loading="dictionaryLoading"
          :options="kzCities"
      />
      <DefaultSelect
          v-model="computedUserForm.education_place"
          label="Учебное заведение"
          name="education_place"
          :loading="dictionaryLoading"
          :options="dictionaryList.education_places"
      />
    </el-col>
  </el-row>
</template>

<script>
import { mapGetters } from "vuex";
import DefaultInput from "@/components/form/DefaultInput";
import DefaultSelect from "@/components/form/DefaultSelect";
import UploadAvatar from "@/components/form/UploadAvatar";
import DatePicker from "@/components/form/DatePicker";

export default {
  components: {
    DefaultInput,
    DefaultSelect,
    UploadAvatar,
    DatePicker
  },
  props:{
    modelValue: Object
  },
  computed: {
    ...mapGetters("DictionaryModule", ["dictionaryList", "dictionaryLoading"]),
    computedUserForm: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
    kzCities() {return this.dictionaryList.cities?.filter(city => city.country === 1) || [];}
  }
};
</script>
