<template>
  <el-form-item :label="label" :prop="name">
    <el-checkbox-group v-model="computedValue">
      <el-checkbox
          v-for="option in options"
          :key="option.value"
          :label="option.value"
      >
        {{ option.label }}
      </el-checkbox>
    </el-checkbox-group>
  </el-form-item>
</template>

<script>
export default {
  props: {
    label: String,
    name: String,
    modelValue: Array,
    options: {
      type: Array,
      required: true
    }
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
