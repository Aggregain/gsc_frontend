<template>
  <el-form-item :prop="name">
    <p v-if="label" class="custom-label">{{ label }}<span>{{ descr }}</span></p>
    <!-- ======== Readonly Mode ======== -->
    <template v-if="readonly">
      <button
          v-if="modelValue"
          class="upload-button greyStyle"
          type="button"
          @click="alert(fileDownloadUrl)"
      >
        <Icon icon="akar-icons:file" color="#8E9DAF" /><span>{{ displayFileName }}</span><DownloadIcon />
      </button>
      <div v-else class="text-muted">Файл не был загружен</div>
    </template>

    <!-- ======== Editable Mode ======== -->
    <template v-else>
      <button
          v-if="modelValue"
          class="upload-button greyStyle"
          type="button"
          @click="removeFile"
      >
        <Icon icon="akar-icons:file" color="#8E9DAF" /><span>{{ displayFileName }}</span><TrashIcon />
      </button>

      <el-upload
          v-else
          :auto-upload="false"
          :show-file-list="false"
          :on-change="handleFileChange"
      >
        <button
            class="upload-button"
            type="button"
        >
          <Icon icon="tabler:upload" color="#FDFDFD" class="uploadStyle" /><span>Загрузить</span>
        </button>
      </el-upload>
    </template>
  </el-form-item>
</template>

<script>
import TrashIcon from "@/components/icons/TrashIcon.vue";
import DownloadIcon from "@/components/icons/DownloadIcon.vue";

export default {
  name: "UploadDocumentInput",
  components:{
    TrashIcon,
    DownloadIcon
  },
  props: {
    label: String,
    name: String,
    descr: {
      type: String,
      default: "Загрузите файл в формате Word (.docx) или PDF (.pdf)"
    },
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