<template>
  <el-form-item :prop="name">
    <p v-if="label" class="custom-label">{{ label }}<span>{{ descr }}</span></p>
    <!-- ======== Readonly Mode ======== -->
    <template v-if="readonly">
      <button
          v-if="attachmentFile"
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
          v-if="attachmentFile"
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
    attachmentFile: {
      type: [File, Object, null],
      default: null,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    displayFileName() {
      return this.attachmentFile?.name || this.attachmentFile?.filename || "Файл";
    },
    fileDownloadUrl() {
      return this.attachmentFile?.url || "#";
    },
  },

  methods: {
    handleFileChange(file) {
      this.$emit("uploadAttachment", file.raw);
    },
    removeFile() {
      console.log("Remove");
    },
  },
};
</script>