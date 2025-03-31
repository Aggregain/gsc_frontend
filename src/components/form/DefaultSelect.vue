<template>
  <el-form-item :label="label" :prop="name">
    <el-select
        v-model="selectedValue"
        :placeholder="placeholder"
    >
      <el-option
          v-for="option in options"
          :key="option.value"
          :label="option.label"
          :value="option.value"
      />
    </el-select>
  </el-form-item>
</template>

<script>
export default {
  props: {
    label: String,
    placeholder: {
      type: String,
      default: 'Выберите из списка'
    },
    name: String,
    modelValue: [String, Number, null],
    options: {
      type: Array,
      required: true
    }
  },
  computed: {
    selectedValue: {
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
