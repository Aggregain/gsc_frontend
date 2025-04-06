<template>
  <el-tabs v-model="activeTab" class="secondStyle">
    <el-tab-pane v-for="tab in tabs" :key="tab.name" :label="tab.label" :name="tab.name">
      <component :is="tab.component" />
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import TabDeadlines from "./tabs/TabDeadlines"

export default {
  components:{
    TabDeadlines,
  },
  data:()=>({
    activeTab: 'tab1',
    tabs: [
      { name: 'tab1', label: '🎓 Бакалавриат', component: 'TabDeadlines' },
      { name: 'tab2', label: '📘 Магистратура', component: 'TabDeadlines' },
      { name: 'tab3', label: '🔬 Докторантура / PhD', component: 'TabDeadlines' },
      { name: 'tab4', label: '🌍 Подготовительные курсы', component: 'TabDeadlines' }
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