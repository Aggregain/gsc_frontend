<template>
  <el-tabs v-model="activeTab" class="secondStyle">
    <el-tab-pane v-for="tab in tabs" :key="tab.name" :label="tab.label" :name="tab.name">
      <component :is="tab.component" />
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import RequirementItemTab from "./tabs/RequirementItemTab"

export default {
  components:{
    RequirementItemTab,
  },
  data:()=>({
    activeTab: 'tab1',
    tabs: [
      { name: 'tab1', label: '🎓 Бакалавриат', component: 'RequirementItemTab' },
      { name: 'tab2', label: '📘 Магистратура', component: 'RequirementItemTab' },
      { name: 'tab3', label: '🔬 Докторантура / PhD', component: 'RequirementItemTab' },
      { name: 'tab4', label: '🌍 Подготовительные курсы', component: 'RequirementItemTab' }
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