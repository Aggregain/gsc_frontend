<template>
  <el-form-item :label="label" :prop="name">
    <el-select
        v-model="selectedValue"
        :placeholder="placeholder"
        :disabled="loading"
    >
      <el-option
          v-for="option in options"
          :key="option.id"
          :label="option.name"
          :value="option.id"
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
    loading: {
      type: Boolean,
      default: false
    },
    name: String,
    modelValue: [String, Number, null],
    options: {
      type: Array
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
