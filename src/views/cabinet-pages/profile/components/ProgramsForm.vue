<template>
  <el-row :gutter="24">
    <el-col :span="24">
      <DefaultRadio
          v-model="computedUserForm.program_type"
          name="program_type"
          :options="[
            { label: 'Бакалавриат', value: 'type1' },
            { label: 'Магистратура', value: 'type2' },
            { label: 'Программа 3', value: 'type3' },
            { label: 'Программа 4', value: 'type4' },
            { label: 'Программа 5', value: 'type5' }
          ]"
      />
    </el-col>
  </el-row>
</template>

<script>
import DefaultRadio from "@/components/form/DefaultRadio";

export default {
  components: {
    DefaultRadio,
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
