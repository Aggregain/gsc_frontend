<template>
  <el-card shadow="never">
    <el-tabs v-model="activeTab">
      <el-tab-pane v-for="tab in tabs" :key="tab.name" :label="tab.label" :name="tab.name">
        <component :is="tab.component" />
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
import TabDescription from "./tabs/TabDescription"
import TabPrograms from "./tabs/TabPrograms"
import TabRequirements from "./tabs/TabRequirements"
import TabScholarship from "./tabs/TabScholarship"
import TabDeadlines from "./tabs/TabDeadlines"
import TabPrice from "./tabs/TabPrice"

export default {
  components:{
    TabDescription,
    TabPrograms,
    TabRequirements,
    TabScholarship,
    TabDeadlines,
    TabPrice,
  },
  data:()=>({
    activeTab: 'tab1',
    tabs: [
      { name: 'tab1', label: 'Описание', component: 'TabDescription' },
      { name: 'tab2', label: 'Программы', component: 'TabPrograms' },
      { name: 'tab3', label: 'Требования к поступлению', component: 'TabRequirements' },
      { name: 'tab4', label: 'Scholarship', component: 'TabScholarship' },
      { name: 'tab5', label: 'Дедлайны', component: 'TabDeadlines' },
      { name: 'tab6', label: 'Стоимость', component: 'TabPrice' }
    ]
  }),
  methods: {
  },
  computed: {
  },
  created() {
  }
}
</script>