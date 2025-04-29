<template>
  <el-row :gutter="24">
    <el-col :span="24">

      <div class="headLabel">
        <div class="defaultIcon"><Icon icon="mingcute:certificate-fill"></Icon></div>
        <p>Требования к поступлению</p>
      </div>

      <template v-if="universityInfo.programs?.length>0">
        <div class="contentBlock">
          <p>
            Ниже приведён список документов, необходимых для подачи заявки на этот уровень обучения
          </p>
        </div>

        <div class="contentBlock">
          <el-tabs v-model="activeTab" class="secondStyle">
            <el-tab-pane v-for="(tab, index) in universityInfo.programs" :key="tab.id" :name="String(index)">
              <template #label><img class="degreeImage" :src="degreeImage(tab.name)" alt=""> {{ getNameFromDictionary('degrees', tab.name) }}</template>
              <TabItem :info="tab.description_academic" />
            </el-tab-pane>
          </el-tabs>
        </div>
      </template>

    </el-col>
  </el-row>
</template>
<script>
import {mapGetters} from "vuex";
import dictionaryMixin from "@/mixins/dictionaryMixin";
import TabItem from "./TabItem"

export default {
  mixins: [dictionaryMixin],
  components:{
    TabItem,
  },
  data:()=>({
    activeTab: "0",
  }),
  computed: {
    ...mapGetters("UniversityModule", ["universityInfo"])
  }
}
</script>