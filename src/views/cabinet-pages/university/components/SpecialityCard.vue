<template>
  <el-card class="specialityCard" shadow="never">
    <div class="head">
      <p class="title">{{ info.name }}</p>
    </div>
    <div class="infoGrid">
      <p><span>Стоимость</span>от {{ $formatPrice(info.price) }}</p>
      <p><span>Срок обучения:</span>{{ info.duration }} года</p>
      <p><span>Дедлайн подачи:</span>{{ $formatDate(info.admission_deadline) }}</p>
      <p><span>Степень:</span>{{ getNameFromDictionary('degrees', info.program_name) }}</p>
    </div>
    <div class="bottom text-right">
      <el-button type="primary" class="medium" plain>Подать заявку</el-button>
    </div>
  </el-card>
</template>
<script>
import dictionaryMixin from "@/mixins/dictionaryMixin";

export default {
  mixins: [dictionaryMixin],
  props: {
    info: Object
  }
}
</script>