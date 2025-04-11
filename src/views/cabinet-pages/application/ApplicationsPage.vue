<template>
  <el-row :gutter="30">
    <el-col v-if="true" :span="24">
      <el-table :data="tableData">
        <el-table-column class-name="text-center" type="index" min-width="20" label="№"/>
        <el-table-column prop="name" min-width="160">
          <template #header>
            Университет
          </template>
          <template #default="scope">
            <p>
              {{ scope.row.name }}
              <span>Канада, Реджайна</span>
            </p>
          </template>
        </el-table-column>
        <el-table-column min-width="130" prop="program" label="Программа" />
        <el-table-column min-width="130" prop="deadline" label="Дедлайн подачи" />
        <el-table-column min-width="130" prop="date" label="Начало обучения" />
        <el-table-column min-width="130" prop="price" label="Стоимость" />
        <el-table-column min-width="130" prop="status">
          <template #header>
            Статус
          </template>
          <template #default="scope">
            <StatusComponent :status="scope.row.status" />
          </template>
        </el-table-column>
        <el-table-column min-width="60">
          <template #default="scope">
            <el-dropdown placement="left-start" trigger="click" @command="handleDropdownCommand">
              <span class="el-dropdown-link">
                <Icon icon="weui:more-outlined" />
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item :command="{ action: 'view', id: scope.row.id }">Посмотреть заявку</el-dropdown-item>
                  <el-dropdown-item :command="{ action: 'delete', id: scope.row.id }">Удалить</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </template>
        </el-table-column>
      </el-table>
    </el-col>

    <el-col v-if="false" :span="24">
      <div class="defaultEmptyBlock" v-if="false">
        <el-card shadow="never">
          <img src="@/assets/img/empty-docs.png" alt="" />
          <p class="custom-empty-text">Здесь будут ваши заявки <span>Начните подавать заявки сейчас</span></p>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import StatusComponent from "@/views/cabinet-pages/application/components/StatusComponent.vue";

export default {
  components:{
    StatusComponent
  },
  data:()=>({
    tableData: [
      { name: 'University of Regina', program: 'Бакалавриат', deadline: '01.08.2025', date: '01.10.2025', price: '$33 000', status: 'pending' },
      { name: 'University of Regina', program: 'Бакалавриат', deadline: '01.08.2025', date: '01.10.2025', price: '$33 000', status: 'success' },
      { name: 'University of Regina', program: 'Бакалавриат', deadline: '01.08.2025', date: '01.10.2025', price: '$33 000', status: 'edit' },
      { name: 'University of Regina', program: 'Бакалавриат', deadline: '01.08.2025', date: '01.10.2025', price: '$33 000', status: 'reject' },
      { name: 'University of Regina', program: 'Бакалавриат', deadline: '01.08.2025', date: '01.10.2025', price: '$33 000', status: 'university' },
    ]
  }),
  methods: {
    handleDropdownCommand(command) {
      if(command.action === 'view'){
        this.viewItem(command.id);
      }
      if(command.action === 'delete'){
        this.deleteItem(command.id);
      }
    },
    viewItem(id) {
      console.log('Посмотреть элемент с ID:', id);
    },
    deleteItem(id) {
      console.log('Удалить элемент с ID:', id);
    }
  },
  computed: {
  },
  created() {
  }
}
</script>