<template>
  <el-dialog v-model="internalVisible" :width="width">
    <p class="title">{{ title }}</p>
    <p class="description" v-html="description"></p>

    <el-form>
      <el-row :gutter="16">
        <el-col :span="24" v-if="withTextarea">
          <DefaultInput
              label=""
              placeholder="Ваш комментарий..."
              type="textarea"
              name="comment"
              :model-value="comment"
              @update:modelValue="$emit('update:comment', $event)"
          />
        </el-col>

        <el-col :span="24" class="uploadFileBlock">
          <el-form-item>
            <button
                v-if="file"
                class="upload-button greyStyle"
                type="button"
            >
              <Icon icon="akar-icons:file" color="#8E9DAF" />
              <span>{{ file.name }}</span>
              <TrashIcon @click="$emit('update:file', null)" />
            </button>

            <el-upload
                v-else
                :auto-upload="false"
                :show-file-list="false"
                :on-change="onFileChange"
            >
              <button class="upload-button" type="button">
                <Icon icon="tabler:upload" color="#FDFDFD" class="uploadStyle" />
                <span>Загрузить файл</span>
              </button>
            </el-upload>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-button
              type="primary"
              class="medium fullSize"
              plain
              @click="$emit('cancel')"
              :loading="loading"
          >
            Отмена
          </el-button>
        </el-col>

        <el-col :span="12">
          <el-button
              type="primary"
              class="medium fullSize"
              @click="$emit('submit')"
              :loading="loading"
          >
            Отправить
          </el-button>
        </el-col>
      </el-row>
    </el-form>
  </el-dialog>
</template>

<script>
import fileValidatorMixin from "@/mixins/fileValidatorMixin";
import TrashIcon from "@/components/icons/TrashIcon.vue";
import DefaultInput from "@/components/form/DefaultInput.vue";

export default {
  mixins: [fileValidatorMixin],
  components: {
    TrashIcon,
    DefaultInput,
  },
  props: {
    modelValue: Boolean,
    title: String,
    description: String,
    comment: String,
    file: Object,
    loading: Boolean,
    withTextarea: Boolean,
    width: {
      type: String,
      default: "500px",
    },
  },
  emits: [
    "update:modelValue",
    "cancel",
    "submit",
    "update:file",
    "update:comment"
  ],
  computed: {
    internalVisible: {
      get() {
        return this.modelValue;
      },
      set(val) {
        this.$emit("update:modelValue", val);
      },
    },
  },
  methods: {
    onFileChange(file) {
      const currentFile = file.raw;
      if (!this.validateFile(currentFile)) return;

      this.$emit("update:file", currentFile);
    },
  },
};
</script>