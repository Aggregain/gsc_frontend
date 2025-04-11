<template>
  <el-form-item :label="label" :prop="name">
    {{ label }}
    <!-- ======== Readonly Mode ======== -->
    <template v-if="readonly">
      <div v-if="modelValue">
        <a
            :href="fileDownloadUrl"
            target="_blank"
            class="file-link"
            rel="noopener noreferrer"
        >
          {{ displayFileName }}
        </a>
      </div>
      <div v-else class="text-muted">Файл не был загружен</div>
    </template>

    <!-- ======== Editable Mode ======== -->
    <template v-else>
      <div v-if="modelValue" class="file-preview">
        <span>{{ displayFileName }}</span>
        <el-button
            type="danger"
            text
            size="small"
            icon="el-icon-delete"
            @click="removeFile"
        >
          Удалить
        </el-button>
      </div>

      <el-upload
          v-else
          class="upload-demo"
          :auto-upload="false"
          :show-file-list="false"
          :on-change="handleFileChange"
      >
        <el-button type="primary" size="small" icon="el-icon-upload">
          Загрузить файл
        </el-button>
      </el-upload>
    </template>
  </el-form-item>
</template>

<script>
export default {
  name: "UploadDocumentInput",

  props: {
    label: String,
    name: String,
    modelValue: {
      type: [File, Object, null],
      default: null,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
  },

  emits: ["update:modelValue"],

  computed: {
    displayFileName() {
      return this.modelValue?.name || this.modelValue?.filename || "Файл";
    },
    fileDownloadUrl() {
      return this.modelValue?.url || "#";
    },
  },

  methods: {
    handleFileChange(file) {
      this.$emit("update:modelValue", file.raw);
    },
    removeFile() {
      this.$emit("update:modelValue", null);
    },
  },
};
</script>