<template>
  <el-col :span="24" v-if="['DRAFT', 'FOR_REVISION'].includes(activeApplicationInfo?.status)">
    <el-button
        class="medium"
        type="primary"
        @click="updateStatus"
        :loading="isSubmitDisabled"
    >Отправить</el-button>
  </el-col>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters('ApplicationModule', { applicationIsReady: 'isReady', activeApplicationInfo: 'activeApplicationInfo' }),
    ...mapGetters('UserModule', { userIsReady: 'isReady' }),

    isSubmitDisabled() {
      return !(this.applicationIsReady && this.userIsReady);
    }
  },
  methods: {
    updateStatus() {
      this.$emit('updateStatus', {status: "IN_PROGRESS"});
    }
  }
}
</script>