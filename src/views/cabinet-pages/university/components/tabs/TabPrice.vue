<template>
  <el-row :gutter="24">
    <el-col :span="24">

      <div class="headLabel">
        <div class="defaultIcon"><Icon icon="mingcute:wallet-4-fill"></Icon></div>
        <p>Проживание и питание</p>
      </div>

      <div class="contentBlock" v-if="universityInfo?.programs?.length>0">
        <el-tabs v-model="activeTab" class="secondStyle">
          <el-tab-pane v-for="(tab, index) in universityInfo.programs" :key="tab.id" :name="String(index)">
            <template #label><img class="degreeImage" :src="degreeImage(tab.name)" alt=""> {{ getNameFromDictionary('degrees', tab.name) }}</template>
            <TabItem :table="tab.expenses" />
          </el-tab-pane>
        </el-tabs>
      </div>

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