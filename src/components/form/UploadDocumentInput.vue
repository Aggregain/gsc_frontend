<template>
  <el-form-item :label="label" :prop="name">
    <el-upload
        class="upload-demo"
        :auto-upload="false"
        :show-file-list="false"
        :on-change="handleFileChange"
    >
      <el-button>Загрузить файл</el-button>
      <span v-if="modelValue">{{ modelValue.name }}</span>
    </el-upload>
  </el-form-item>
</template>

<script>
export default {
  props: {
    label: String,
    name: String,
    modelValue: [File, null],
  },

  emits: ["update:modelValue"],

  methods: {
    handleFileChange(file) {
      this.$emit("update:modelValue", file.raw);
    }
  }
};
</script>
