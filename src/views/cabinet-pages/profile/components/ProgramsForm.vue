<template>
  <el-row :gutter="24">
    <el-col :span="24">
      <DefaultRadio
          v-model="computedUserForm.degree"
          name="degree"
          :options="[
            { label: 'Бакалавриат', value: 'BACHELOR' },
            { label: 'Магистратура', value: 'MASTERS' },
            { label: 'МВА', value: 'MBA' }
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
