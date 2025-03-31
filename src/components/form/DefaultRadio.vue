<template>
  <el-form-item :label="label" :prop="name">
    <el-radio-group v-model="computedValue">
      <el-radio
          v-for="option in options"
          :key="option.value"
          :label="option.value"
      >
        {{ option.label }}
      </el-radio>
    </el-radio-group>
  </el-form-item>
</template>

<script>
export default {
  props: {
    label: String,
    name: String,
    modelValue: [String, Number],
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
