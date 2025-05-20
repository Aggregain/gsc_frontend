<template>
  <el-col :span="24" v-if="['IN_PROGRESS'].includes(activeApplicationInfo?.status)">
    <el-button
        class="medium secondStyle"
        type="danger"
        plain
        @click="revisionDialog = true"
        :loading="isSubmitDisabled"
    >На доработку</el-button>

    <el-button
        class="medium"
        type="success"
        @click="offerDialog = true"
        :loading="isSubmitDisabled"
    >Принять</el-button>

    <!-- Comment Dialog -->
    <FileUploadDialog
        v-model="revisionDialog"
        title="Отправка заявки на доработку"
        description="Пожалуйста, укажите комментарий <br>с рекомендациями по исправлению"
        :withTextarea="true"
        :comment="revisionForm.comment"
        @update:comment="val => revisionForm.comment = val"
        :file="revisionForm.file"
        @update:file="val => revisionForm.file = val"
        :loading="isSubmitDisabled"
        @cancel="revisionDialog = false"
        @submit="sendComment"
    />

    <!-- Offer Dialog -->
    <FileUploadDialog
        v-model="offerDialog"
        title="Принятие заявки"
        description="Вы можете прикрепить документ (Offer) <br>для подтверждения принятия заявки"
        :withTextarea="false"
        :file="offerForm.file"
        @update:file="val => offerForm.file = val"
        :loading="isSubmitDisabled"
        @cancel="offerDialog = false"
        @submit="sendOffer"
    />
  </el-col>
</template>

<script>
import { mapGetters } from "vuex";
import FileUploadDialog from "./FileUploadDialog.vue";

export default {
  components: {
    FileUploadDialog
  },
  data() {
    return {
      revisionDialog: false,
      offerDialog: false,
      revisionForm: {
        comment: '',
        file: null
      },
      offerForm: {
        file: null
      }
    };
  },
  computed: {
    ...mapGetters('ApplicationModule', {applicationIsReady: 'isReady', activeApplicationInfo: 'activeApplicationInfo'}),
    ...mapGetters('UserModule', {userIsReady: 'isReady'}),
    isSubmitDisabled() {
      return !(this.applicationIsReady && this.userIsReady);
    }
  },
  methods: {
    sendComment() {
      const formData = new FormData();
      formData.append("status", "FOR_REVISION");
      formData.append("comment", this.revisionForm.comment);
      if (this.revisionForm.file) {
        formData.append("comment_file", this.revisionForm.file);
      }
      this.$emit('sendComment', formData);
    },
    sendOffer() {
      const formData = new FormData();
      formData.append("status", "ACCEPTED");
      if (this.offerForm.file) {
        formData.append("offer", this.offerForm.file);
      }
      this.$emit('sendOffer', formData);
    }
  }
};
</script>
