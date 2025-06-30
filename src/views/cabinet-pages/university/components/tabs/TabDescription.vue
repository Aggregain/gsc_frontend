<template>
  <el-row :gutter="24">
    <el-col :span="24">

      <template v-if="universityInfo.general_description">
        <div class="headLabel">
          <div class="defaultIcon"><Icon icon="basil:university-solid"></Icon></div>
          <p>Об университете</p>
        </div>
        <div class="contentBlock">
          <div v-html="universityInfo.general_description" />
          <div class="infoList">
            <p><span>Год основания</span>{{ $formatDate(universityInfo?.foundation_date) }}</p>
            <p><span>Расположение</span>{{ universityInfo?.country_name }}, {{ universityInfo?.city_name }}</p>
<!--            <p><span>Рейтинг университета</span>{{ parseInt(universityInfo?.rating) }}</p>-->
          </div>
        </div>

        <hr class="big">
      </template>

      <template v-if="universityInfo.campus_description">
        <div class="headLabel">
          <div class="defaultIcon"><Icon icon="fluent:building-bank-48-filled"></Icon></div>
          <p>Кампус Университета</p>
        </div>

        <div class="contentBlock" v-html="universityInfo.campus_description" />

        <hr class="big">
      </template>

      <template v-if="universityInfo.specialties?.length>0">
        <div class="headLabel">
          <div class="defaultIcon"><Icon icon="tabler:clipboard-list-filled"></Icon></div>
          <p>Специальности</p>
        </div>
        <div class="contentBlock">
          <el-row :gutter="24">
            <el-col :xs={span:24} :span="12" v-for="item in universityInfo.specialties" v-bind:key="item.id"><SpecialityCard :info="item" /></el-col>
          </el-row>
        </div>
      </template>

    </el-col>
  </el-row>
</template>
<script>
import SpecialityCard from "../SpecialityCard";
import {mapGetters} from "vuex";

export default {
  components:{
    SpecialityCard
  },
  computed: {
    ...mapGetters("UniversityModule", ["universityInfo"])
  }
}
</script>