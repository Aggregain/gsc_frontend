<template>
  <el-row :gutter="24">
    <el-col :span="24">

      <div class="headLabel">
        <div class="defaultIcon"><Icon icon="tabler:award-filled"></Icon></div>
        <p>Скидки</p>
      </div>

      <div class="contentBlock" v-html="universityInfo?.scholarship_description" />

    </el-col>
  </el-row>
</template>
<script>

import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters("UniversityModule", ["universityInfo"])
  }
}
</script>