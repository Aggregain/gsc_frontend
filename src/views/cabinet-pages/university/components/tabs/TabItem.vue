<template>
  <el-row :gutter="24">
    <el-col :span="24">
      <div v-if="info" v-html="info" />

      <el-table v-if="table?.length>0" class="greyTable" :data="table">
        <el-table-column
            v-for="column in visibleColumns"
            :key="column.prop"
            :prop="column.prop"
            :label="column.label"
        />
      </el-table>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: {
    info: String,
    table: Array
  },
  computed: {
    visibleColumns() {
      const fields = [
        { prop: 'name', label: 'Этап' },
        { prop: 'due_to', label: 'Крайний срок' },
        { prop: 'price_per_year_text', label: 'Сумма в год' }
      ]

      if (!this.table?.length) return []

      return fields.filter(field =>
          this.table.some(row => field.prop in row)
      )
    }
  }
}
</script>
