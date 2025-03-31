<template>
  <el-row :gutter="24">
    <el-col :span="6">
      <DefaultInput label="IELTS" placeholder="Введите балл" name="ielts" v-model="computedUserForm.ielts" />
    </el-col>
    <el-col :span="6">
      <DefaultInput label="SAT" placeholder="Введите балл" name="sat" v-model="computedUserForm.sat" />
    </el-col>
    <el-col :span="6">
      <DefaultInput label="GMAT" placeholder="Введите балл" name="gmat" v-model="computedUserForm.gmat" />
    </el-col>
    <el-col :span="6">
      <DefaultInput label="TOEFL" placeholder="Введите балл" name="toefl" v-model="computedUserForm.toefl" />
    </el-col>
    <el-col :span="6">
      <DefaultInput label="GRE" placeholder="Введите балл" name="gre" v-model="computedUserForm.gre" />
    </el-col>
    <el-col :span="6">
      <DefaultInput label="DUOLINGO" placeholder="Введите балл" name="duolingo" v-model="computedUserForm.duolingo" />
    </el-col>
    <el-col :span="6">
      <DefaultInput label="Текущий GPA" placeholder="Введите балл" name="gpa" v-model="computedUserForm.gpa" />
    </el-col>
  </el-row>
</template>

<script>
import DefaultInput from "@/components/form/DefaultInput";

export default {
  components: {
    DefaultInput,
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
