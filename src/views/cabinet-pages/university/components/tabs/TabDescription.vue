<template>
  <el-row :gutter="24">
    <el-col :span="24">

      <div class="headLabel">
        <div class="defaultIcon"><Icon icon="basil:university-solid"></Icon></div>
        <p>Об университете</p>
      </div>
      <div class="contentBlock">
        <p>
          Государственное некоммерческое учебное заведение. the U располагается в городе Солт-Лейк-Сити, США. the U ведет совместную деятельность с Utah System of Higher Education, Association of Public and Land-Grant Universities (APLU), OpenCourseWare Consortium (OCW). Sport affiliations and memberships: National Collegiate Athletic Association (NCAA). Вуз находится в топ-440 лучших университетов мира, по версии международного рейтинга QS. the U — один из лучших вузов США. В рейтинге QS, вуз один из самых развитых в инженерии и технологиях, медико-биологических науках, естественных науках, социальных науках и менеджменте, искусстве и гуманитарных науках. Вуз занимает 299 строчку в топе независимого международного рейтинга вузов мира THE.
        </p>
        <div class="infoList">
          <p><span>Год основания</span>1850</p>
          <p><span>Расположение</span>США, Солт-Лейк-Сити</p>
          <p><span>Рейтинг университета</span>531</p>
        </div>
      </div>

      <hr>

      <div class="headLabel">
        <div class="defaultIcon"><Icon icon="fluent:building-bank-48-filled"></Icon></div>
        <p>Кампус Университета</p>
      </div>
      <div class="contentBlock">
        <p>
          У Университета Юты городской кампус, это открывает студентам много вариантов учебы и отдыха. Обилие музеев, театров и кинотеатров создает возможности для культурного развития молодежи. Также в городе находятся крупные компании, которые предлагают стажировки. В университете работает библиотека, в коллекции которой вы найдете не только учебники и научные труды, но и произведения классиков, современную литературу и многое другое. Обмен межкультурным опытом занимает особое место при обучении в Университете Юты. Учебное заведение регулярно приглашает зарубежных студентов для участия в программах обмена и организует различные совместные мероприятия.
        </p>
      </div>

      <hr>

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

export default {
  components:{
    SpecialityCard
  }
}
</script>