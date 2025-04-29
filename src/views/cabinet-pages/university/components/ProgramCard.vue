<template>
  <el-card class="programTypeCard" shadow="never">
    <div class="head">
      <p class="title"><img class="degreeImage" :src="degreeImage(info.name)" alt=""> {{ getNameFromDictionary('degrees', info.name) }}</p>
    </div>
    <div class="content">
      <div v-html="info.description_general" />
      <p>
        <br>
        <br>
        Длительность – {{ info.duration_years }} года
      </p>
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