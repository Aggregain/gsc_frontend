<template>
  <el-row :gutter="24">
    <el-col :span="24">

      <div class="headLabel">
        <div class="defaultIcon"><Icon icon="solar:case-bold"></Icon></div>
        <p>Программы</p>
      </div>
      <div class="contentBlock">
        <el-row :gutter="24">
          <el-col :span="12"><ProgramCard /></el-col>
          <el-col :span="12"><ProgramCard /></el-col>
          <el-col :span="12"><ProgramCard /></el-col>
          <el-col :span="12"><ProgramCard /></el-col>
        </el-row>
      </div>

    </el-col>
  </el-row>
</template>
<script>
import ProgramCard from "../ProgramCard";

export default {
  components:{
    ProgramCard
  }
}
</script>