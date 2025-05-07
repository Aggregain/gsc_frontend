<template>
  <el-form-item :prop="name">
    <!-- ======== Readonly Mode ======== -->
    <template v-if="readonly">
      <button
          v-if="attachmentFile"
          class="upload-button greyStyle"
          type="button"
          :disabled="loading"
          @click="downloadFile(fileDownloadUrl)"
      >
        <Icon icon="mingcute:loading-3-fill" v-if="loading" class="spinnerIcon" />
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
          :disabled="loading"
      >
        <Icon icon="mingcute:loading-3-fill" v-if="loading" class="spinnerIcon" />
        <Icon icon="akar-icons:file" color="#8E9DAF" /><span>{{ displayFileName }}</span><TrashIcon @click="removeFile" />
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
            :disabled="loading"
        >
          <Icon icon="mingcute:loading-3-fill" v-if="loading" class="spinnerIcon" />
          <Icon icon="tabler:upload" color="#FDFDFD" class="uploadStyle" /><span>Загрузить</span>
        </button>
      </el-upload>
    </template>
  </el-form-item>
</template>

<script>
import TrashIcon from "@/components/icons/TrashIcon.vue";
import DownloadIcon from "@/components/icons/DownloadIcon.vue";
import {mapActions} from "vuex";
import fileValidatorMixin from "@/mixins/fileValidatorMixin";

export default {
  mixins: [fileValidatorMixin],
  components:{
    TrashIcon,
    DownloadIcon
  },
  props: {
    name: String,
    application_id: {
      type: [Number, String],
      default: null
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

  data:()=>({
    loading: false,
  }),

  computed: {
    displayFileName() {
      return this.attachmentFile?.meta || "Файл";
    },
    fileDownloadUrl() {
      return this.attachmentFile?.file || "#";
    },
  },

  methods: {
    ...mapActions("AttachmentModule", ["ADD_ATTACHMENT", "DELETE_ATTACHMENT"]),

    async handleFileChange(file) {
      const currentFile = file.raw;
      if (!this.validateFile(currentFile)) return;

      const formData = new FormData();
      formData.append("file", currentFile);
      formData.append("meta", currentFile.name);
      formData.append("name", this.name);
      if (this.application_id) {
        formData.append("application", this.application_id);
      }

      this.loading = true;
      try {
        const result = await this.ADD_ATTACHMENT(formData);
        if (result.success) {
          this.$emit("updateInfo");
        }
      } catch (error) {
        console.error("Ошибка при загрузке файла:", error);
      } finally {
        this.loading = false;
      }
    },

    async removeFile() {
      if (!this.attachmentFile.id) return;

      this.loading = true;
      try {
        const result = await this.DELETE_ATTACHMENT(this.attachmentFile.id);
        if (result.success) {
          this.$emit("updateInfo");
        }
      } catch (error) {
        console.error("Ошибка при удалении файла:", error);
      } finally {
        this.loading = false;
      }
    },

    downloadFile(url) {
      window.open(url, '_blank');
    }

  },
};
</script>