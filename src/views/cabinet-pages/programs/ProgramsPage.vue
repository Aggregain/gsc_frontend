<template>
  <el-row :gutter="40" id="programsPage">
    <el-col :span="24">
      <el-row :gutter="40" align="middle">
        <el-col :xs={span:0} :span="6">
          <div class="headBlock">
            <h2>Фильтры</h2>
            <el-button v-if="Object.keys(filterForm).length>0" class="mini" type="danger" link @click="clearFilter">Сбросить</el-button>
          </div>
        </el-col>
        <el-col :xs={span:24} :span="18">
          <el-row :gutter="40" align="middle">
            <el-col :xs={span:24} :span="12">
              <h2>Найдено программ: {{ programsList.length }}</h2>
              <el-button v-if="Object.keys(filterForm).length>0" class="mini forMobile" type="danger" link @click="clearFilter">Сбросить</el-button>
            </el-col>
            <el-col :xs={span:24} :span="12" class="text-right">
              <ForMeButton />
              <SortButton />
              <MobileFilterComponent />
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-col>
    <el-col :xs={span:0} :span="6">
      <FilterComponent />
    </el-col>
    <el-col :xs={span:24} :span="18">
      <ProgramsList v-loading="isLoading" />
    </el-col>
  </el-row>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from "vuex";
import FilterComponent from "./components/FilterComponent";
import ProgramsList from "./components/ProgramsList";
import ForMeButton from "./components/ForMeButton";
import SortButton from "./components/SortButton";
import MobileFilterComponent from "./components/MobileFilterComponent";

export default {
  components:{
    FilterComponent,
    ProgramsList,
    ForMeButton,
    SortButton,
    MobileFilterComponent
  },
  data:()=>({
  }),
  methods: {
    ...mapActions("ProgramModule", ["GET_PROGRAMS"]),
    ...mapMutations("ProgramModule", ["UPDATE_FILTER_DATA"]),

    clearFilter(){
      this.UPDATE_FILTER_DATA({});
      this.GET_PROGRAMS();
    }
  },
  computed: {
    ...mapGetters("ProgramModule", ["filterForm", "isLoading"]),
    ...mapGetters("ProgramModule", ["programsList"])
  }
}
</script>