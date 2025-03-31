<template>
  <el-form-item :label="label" :prop="name">
    <el-input v-model="computedValue" :placeholder="placeholder" />
  </el-form-item>
</template>

<script>
export default {
  props: {
    label: String,
    name: String,
    placeholder: {
      type: String,
      default: 'Введите...'
    },
    modelValue: String
  },
  computed: {
    computedValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      }
    }
  }
};
</script>
