<template>
  <el-form-item :label="label" :prop="name">
    <el-date-picker
        v-model="computedValue"
        :placeholder="placeholder"
        :disabled="readonly"
        type="date"
        format="YYYY-MM-DD"
        value-format="YYYY-MM-DD"
        style="width: 100%"
    />
  </el-form-item>
</template>

<script>
export default {
  name: "DatePickerField",
  props: {
    label: String,
    name: String,
    placeholder: {
      type: String,
      default: "Выберите дату"
    },
    readonly: {
      type: Boolean,
      default: false
    },
    modelValue: [String, Date, null]
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
