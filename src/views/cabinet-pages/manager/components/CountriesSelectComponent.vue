<template>
  <div class="multiSelectBlock">
    <el-button class="mini afterIcon" :class="opened && 'opened'" plain @click="opened=!opened">Страна обучения <ArrowIcon /></el-button>
    <div class="absoluteSelectBlock" v-if="opened">
      <DefaultCheckboxes
          v-if="!dictionaryLoading"
          v-model="selectedCountries"
          :options="dictionaryList.countries"
      />
      <el-button type="primary" class="medium-second fullSize">Применить</el-button>
    </div>
  </div>
</template>
<script>
import {mapGetters} from "vuex";
import ArrowIcon from "@/components/icons/ArrowIcon";
import DefaultCheckboxes from "@/components/form/DefaultCheckboxes";

export default {
  components:{
    ArrowIcon,
    DefaultCheckboxes
  },
  data:()=>({
    opened: false,
    selectedCountries: []
  }),
  methods: {
  },
  computed:{
    ...mapGetters("DictionaryModule", ["dictionaryList", "dictionaryLoading"]),
  }
}
</script>