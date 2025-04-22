<template>
  <el-form-item :label="label" :prop="name">
    <el-checkbox-group v-model="computedValue" :disabled="loading">
      <el-checkbox
          v-for="option in options"
          :key="option.id"
          :label="option.id"
      >
        {{ option.name }}
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
    loading: {
      type: Boolean,
      default: false
    },
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
