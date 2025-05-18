<template>
  <el-col :span="24" v-if="['IN_PROGRESS', 'FOR_REVISION'].includes(activeApplicationInfo?.status)">
    <el-button
        class="medium secondStyle"
        type="danger"
        plain
        @click="revisionDialog = true"
        :loading="isSubmitDisabled">На доработку</el-button>

    <el-button
        class="medium"
        type="success"
        @click="updateStatus"
        :loading="isSubmitDisabled">Принять</el-button>

    <!-- ======== Revision Dialog ======== -->
    <el-dialog
        v-model="revisionDialog"
        width="500px"
    >
      <p class="title">Отправка заявки на доработку</p>
      <p class="description">Пожалуйста, укажите комментарий <br>с рекомендациями по исправлению</p>

      <el-form :model="revisionForm" class="revisionForm">
        <el-row :gutter="16">

          <el-col :span="24">
            <DefaultInput label="" placeholder="Ваш комментарий..." type="textarea" name="comment" v-model="revisionForm.comment" />
          </el-col>

          <el-col :span="24" class="uploadFileBlock">
            <el-form-item>
              <button
                  v-if="revisionForm.comment_file"
                  class="upload-button greyStyle"
                  type="button"
              >
                <Icon icon="akar-icons:file" color="#8E9DAF" />
                <span>{{ revisionForm.comment_file.name }}</span>
                <TrashIcon @click="revisionForm.comment_file = ''" />
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
                  <Icon icon="tabler:upload" color="#FDFDFD" class="uploadStyle" />
                  <span>Загрузить файл</span>
                </button>
              </el-upload>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-button type="primary" class="medium fullSize" plain @click="revisionDialog = false" :loading="isSubmitDisabled">Отмена</el-button>
          </el-col>
          <el-col :span="12">
            <el-button type="primary" class="medium fullSize" @click="sendComment" :loading="isSubmitDisabled">Отправить</el-button>
          </el-col>
        </el-row>
      </el-form>
    </el-dialog>
    <!-- ======== Revision Dialog ======== -->
  </el-col>
</template>

<script>
import {mapGetters} from "vuex";
import fileValidatorMixin from "@/mixins/fileValidatorMixin";
import TrashIcon from "@/components/icons/TrashIcon.vue";
import DefaultInput from "@/components/form/DefaultInput";

export default {
  mixins: [fileValidatorMixin],
  components: {
    TrashIcon,
    DefaultInput
  },
  data:()=>({
    revisionDialog: false,
    revisionForm: {
      comment: '',
      comment_file: ''
    }
  }),
  computed: {
    ...mapGetters('ApplicationModule', { applicationIsReady: 'isReady', activeApplicationInfo: 'activeApplicationInfo' }),
    ...mapGetters('UserModule', { userIsReady: 'isReady' }),

    isSubmitDisabled() {
      return !(this.applicationIsReady && this.userIsReady);
    }
  },
  methods: {
    handleFileChange(file) {
      const currentFile = file.raw;
      if (!this.validateFile(currentFile)) return;

      this.revisionForm.comment_file = currentFile;
    },
    sendComment() {
      const formData = new FormData();
      formData.append("status", "FOR_REVISION");
      formData.append("comment", this.revisionForm.comment);
      formData.append("comment_file", this.revisionForm.comment_file);
      this.$emit('sendComment', formData);
    },
    updateStatus() {
      this.$emit('updateStatus', {status: "ACCEPTED"});
    }
  }
}
</script>