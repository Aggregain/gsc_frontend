<template>
  <el-row :gutter="24">
    <el-col :span="24">

      <div class="headLabel">
        <div class="defaultIcon"><Icon icon="mingcute:certificate-fill"></Icon></div>
        <p>Требования к поступлению</p>
      </div>
      <div class="contentBlock">
        <p>
          Ниже приведён список документов, необходимых для подачи заявки на этот уровень обучения
        </p>
      </div>
      <div class="contentBlock">
        <RequirementsTabsComponent />
      </div>

    </el-col>
  </el-row>
</template>
<script>
import RequirementsTabsComponent from "../RequirementsTabsComponent";

export default {
  components:{
    RequirementsTabsComponent
  }
}
</script>