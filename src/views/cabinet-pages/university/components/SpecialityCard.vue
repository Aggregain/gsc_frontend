<template>
  <el-card class="specialityCard" shadow="never">
    <div class="head">
      <p class="title">{{ info.name }}</p>
    </div>
    <div class="infoGrid">
      <p><span>Стоимость</span>от {{ $formatPrice(info.price) }}</p>
      <p><span>Срок обучения:</span>{{ info.duration }} года</p>
<!--      <p><span>Дедлайн подачи:</span>{{ $formatDate(info.admission_deadline) }}</p>-->
      <p><span>Степень:</span>{{ getNameFromDictionary('degrees', info.program_name) }}</p>
    </div>
    <div class="bottom text-right">
      <el-button v-if="universityInfo.id" :loading="isLoading" @click="createApplication" type="primary" class="medium" plain>Подать заявку</el-button>
    </div>
  </el-card>
</template>
<script>
import dictionaryMixin from "@/mixins/dictionaryMixin";
import createApplicationMixin from "@/mixins/createApplicationMixin";
import {mapGetters} from "vuex";

export default {
  mixins: [dictionaryMixin, createApplicationMixin],
  props: {
    info: Object
  },
  computed:{
    ...mapGetters("UniversityModule", ["universityInfo"]),
    ...mapGetters("ApplicationModule", ["isLoading"]),
  }
}
</script>