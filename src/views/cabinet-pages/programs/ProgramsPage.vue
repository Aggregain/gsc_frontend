<template>
  <el-row :gutter="40" id="programsPage">
    <el-col :span="24">
      <el-row :gutter="40" align="middle">
        <el-col :span="6">
          <div class="headBlock">
            <h2>Фильтры</h2>
            <el-button class="mini" type="danger" link>Сбросить</el-button>
          </div>
        </el-col>
        <el-col :span="18">
          <el-row :gutter="40" align="middle">
            <el-col :span="12"><h2>Найдено 143 программ</h2></el-col>
            <el-col :span="12" class="text-right">
              <el-button class="mini afterIcon" type="primary" plain>Подходящие мне <StarIcon /></el-button>
              <el-button class="mini afterIcon secondStyle" type="primary" plain>По названию <SortIcon /></el-button>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="6">
      <FilterComponent />
    </el-col>
    <el-col :span="18">
      <ProgramsList />
    </el-col>
  </el-row>
</template>

<script>
import {mapActions} from "vuex";
import StarIcon from "@/components/icons/StarIcon";
import SortIcon from "@/components/icons/SortIcon";
import FilterComponent from "./components/FilterComponent";
import ProgramsList from "./components/ProgramsList";

export default {
  components:{
    StarIcon,
    SortIcon,
    FilterComponent,
    ProgramsList
  },
  data:()=>({
    programs: [
      {
        name: 'University of Utah'
      }
    ],
  }),
  methods:{
    ...mapActions("ProgramModule", ["GET_PROGRAMS"]),
  },
  created() {
    // this.GET_PROGRAMS();
  }
}
</script>