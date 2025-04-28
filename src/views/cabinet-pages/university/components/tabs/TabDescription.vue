<template>
  <el-row :gutter="24">
    <el-col :span="24">

      <div class="headLabel">
        <div class="defaultIcon"><Icon icon="basil:university-solid"></Icon></div>
        <p>Об университете</p>
      </div>
      <div class="contentBlock">
        <div v-html="universityInfo?.description" />
        <div class="infoList">
          <p><span>Год основания</span>{{ $formatDate(universityInfo?.foundation_date) }}</p>
          <p><span>Расположение</span>{{ universityInfo.country_name }}, {{ universityInfo.city_name }}</p>
          <p><span>Рейтинг университета</span>{{ parseInt(universityInfo?.rating) }}</p>
        </div>
      </div>

      <hr class="big">

      <div class="headLabel">
        <div class="defaultIcon"><Icon icon="fluent:building-bank-48-filled"></Icon></div>
        <p>Кампус Университета</p>
      </div>
      <div class="contentBlock">
        <p>
          У Университета Юты городской кампус, это открывает студентам много вариантов учебы и отдыха. Обилие музеев, театров и кинотеатров создает возможности для культурного развития молодежи. Также в городе находятся крупные компании, которые предлагают стажировки. В университете работает библиотека, в коллекции которой вы найдете не только учебники и научные труды, но и произведения классиков, современную литературу и многое другое. Обмен межкультурным опытом занимает особое место при обучении в Университете Юты. Учебное заведение регулярно приглашает зарубежных студентов для участия в программах обмена и организует различные совместные мероприятия.
        </p>
      </div>

      <hr class="big">

      <div class="headLabel">
        <div class="defaultIcon"><Icon icon="tabler:clipboard-list-filled"></Icon></div>
        <p>Специальности</p>
      </div>
      <div class="contentBlock">
        <el-row :gutter="24">
          <el-col :span="12"><SpecialityCard /></el-col>
          <el-col :span="12"><SpecialityCard /></el-col>
          <el-col :span="12"><SpecialityCard /></el-col>
          <el-col :span="12"><SpecialityCard /></el-col>
        </el-row>
      </div>

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