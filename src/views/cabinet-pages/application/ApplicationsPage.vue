<template>
  <el-row :gutter="30" v-loading="isLoading">
    <el-col v-if="userApplications?.length > 0" :span="24">
      <el-table :data="userApplications">

        <el-table-column class-name="text-center" type="index" min-width="20" label="№"/>

        <el-table-column prop="name" min-width="160">
          <template #header>
            Университет
          </template>
          <template #default="scope">
            <p>
              {{ (n => n.length > 32 ? n.slice(0, 32) + '...' : n)(scope.row?.education_place?.name) }}
              <span>{{ scope.row?.education_place?.country_name }}, {{ scope.row?.education_place?.city_name }}</span>
            </p>
          </template>
        </el-table-column>

        <el-table-column prop="program" min-width="160">
          <template #header>
            Программа
          </template>
          <template #default="scope">
            <p>
              {{ getNameFromDictionary('degrees', scope.row?.program?.name) }}
            </p>
          </template>
        </el-table-column>

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

    <el-col v-else :span="24">
      <div class="defaultEmptyBlock">
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
import dictionaryMixin from "@/mixins/dictionaryMixin";
import {mapActions, mapGetters} from "vuex";

export default {
  mixins: [dictionaryMixin],
  components:{
    StatusComponent
  },
  methods: {
    ...mapActions("ApplicationModule", ["GET_APPLICATIONS", "DELETE_APPLICATION"]),

    handleDropdownCommand(command) {
      if(command.action === 'view'){
        this.$router.push({ name: "ViewApplication", params:{ application_id: command.id } });
      }
      if(command.action === 'delete'){
        this.DELETE_APPLICATION(command.id);
      }
    }
  },
  computed: {
    ...mapGetters("ApplicationModule", ["userApplications", "isLoading"])
  },
  created() {
    this.GET_APPLICATIONS();
  }
}
</script>