<template>
  <el-row :gutter="24">
    <el-col :xs={span:12} :span="6">
      <DefaultInput label="IELTS" placeholder="Введите балл" name="ielts_grade" v-model="computedUserForm.ielts_grade" />
    </el-col>
    <el-col :xs={span:12} :span="6">
      <DefaultInput label="SAT" placeholder="Введите балл" name="sat_grade" v-model="computedUserForm.sat_grade" />
    </el-col>
    <el-col :xs={span:12} :span="6">
      <DefaultInput label="GMAT" placeholder="Введите балл" name="gmat_grade" v-model="computedUserForm.gmat_grade" />
    </el-col>
    <el-col :xs={span:12} :span="6">
      <DefaultInput label="TOEFL" placeholder="Введите балл" name="toefl_grade" v-model="computedUserForm.toefl_grade" />
    </el-col>
    <el-col :xs={span:12} :span="6">
      <DefaultInput label="GRE" placeholder="Введите балл" name="gre_grade" v-model="computedUserForm.gre_grade" />
    </el-col>
    <el-col :xs={span:12} :span="6">
      <DefaultInput label="DUOLINGO" placeholder="Введите балл" name="duolingo_grade" v-model="computedUserForm.duolingo_grade" />
    </el-col>
    <el-col :xs={span:12} :span="6">
      <DefaultInput label="Текущий GPA" placeholder="Введите балл" name="gpa_grade" v-model="computedUserForm.gpa_grade" />
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
