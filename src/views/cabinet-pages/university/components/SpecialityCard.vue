<template>
  <el-card class="specialityCard" shadow="never">
    <div class="head">
      <p class="title">Computer Engineering</p>
<!--      <el-button class="onlyIcon" link><HeartIcon /></el-button>-->
    </div>
    <div class="infoGrid">
      <p><span>Стоимость</span>от $33 000</p>
      <p><span>Срок обучения:</span>4 года</p>
      <p><span>Дедлайн подачи:</span>01.08.2025</p>
      <p><span>Степень:</span>Бакалавриат</p>
    </div>
    <div class="bottom text-right">
      <el-button type="primary" class="medium" plain>Подать заявку</el-button>
    </div>
  </el-card>
</template>
<script>
// import HeartIcon from "@/components/icons/HeartIcon";

export default {
  components:{
    // HeartIcon
  }
}
</script>