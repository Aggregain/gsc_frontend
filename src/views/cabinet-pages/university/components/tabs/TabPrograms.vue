<template>
  <el-row :gutter="24">
    <el-col :span="24">

      <div class="headLabel">
        <div class="defaultIcon"><Icon icon="solar:case-bold"></Icon></div>
        <p>Программы</p>
      </div>
      <div class="contentBlock" v-if="universityInfo.programs?.length>0">
        <el-row :gutter="24">
          <el-col :span="12" v-for="item in universityInfo.programs" v-bind:key="item.id">
            <ProgramCard :info="item" />
          </el-col>
        </el-row>
      </div>

    </el-col>
  </el-row>
</template>
<script>
import ProgramCard from "../ProgramCard";
import {mapGetters} from "vuex";

export default {
  components:{
    ProgramCard
  },
  computed: {
    ...mapGetters("UniversityModule", ["universityInfo"])
  }
}
</script>