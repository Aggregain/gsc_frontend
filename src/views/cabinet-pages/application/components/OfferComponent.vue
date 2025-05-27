<template>
  <el-card shadow="never" v-if="activeApplicationInfo.status && activeApplicationInfo.status === 'ACCEPTED'" v-loading="isLoading">
    <el-row :gutter="24">
      <el-col :span="24">
        <ApplicationNotificationStatus
            :status="activeApplicationInfo.status"
            :comment="activeApplicationInfo.comment"
            :comment_file="activeApplicationInfo.comment_file"
        />
      </el-col>
      <el-col :span="24" v-if="activeApplicationInfo.offer">
        <p class="custom-label">Conditional Offer</p>
        <button class="upload-button greyStyle" type="button" @click="downloadFile(activeApplicationInfo.offer)">
          <Icon icon="akar-icons:file" color="#8E9DAF" /><span>Скачать Offer</span><DownloadIcon />
        </button>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import {mapGetters} from "vuex";
import ApplicationNotificationStatus from "./ApplicationNotificationStatus";
import DownloadIcon from "@/components/icons/DownloadIcon.vue";

export default {
  components: {
    ApplicationNotificationStatus,
    DownloadIcon
  },
  computed: {
    ...mapGetters("ApplicationModule", ["activeApplicationInfo", "isLoading"])
  },
  methods: {
    downloadFile(url) {
      window.open(url, '_blank');
    }
  }
};
</script>