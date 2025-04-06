<template>
  <el-row :gutter="24">
    <el-col :span="24">

      <div class="headLabel">
        <div class="defaultIcon"><Icon icon="solar:calendar-bold"></Icon></div>
        <p>Дедлайны</p>
      </div>
      <div class="contentBlock">
        <el-table class="greyTable" :data="tableData">
          <el-table-column prop="name" label="Этап" />
          <el-table-column prop="label" label="Крайний срок" />
        </el-table>
      </div>

    </el-col>
  </el-row>
</template>
<script>

export default {
  data:()=>({
    tableData: [
      { name: 'Подача основной заявки', label: '1 августа 2025 г.' },
      { name: 'Заявка на стипендию', label: '1 марта 2025 г.' },
      { name: 'Оплата депозита за обучение', label: '30 апреля 2025 г.' },
      { name: 'Подача документов на визу	', label: 'до 1 июня 2025 г.' },
      { name: 'Начало учебы	', label: '1 сентября 2025 г.' }
    ]
  }),
}
</script>