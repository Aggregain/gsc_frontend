<template>
  <el-form :model="filterForm" class="filterForm">
    <FilterItem
        v-model="filterForm.country"
        @update:modelValue="filterChanged"
        title="Страна обучения"
        name="country"
        :show="dictionaryLoading"
        :loading="isLoading"
        :options="dictionaryList.countries"
    />

    <FilterItem
        v-model="filterForm.city"
        @update:modelValue="filterChanged"
        title="Город обучения"
        name="city"
        :show="dictionaryLoading"
        :loading="isLoading"
        :options="dictionaryList.cities"
    />
  </el-form>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import FilterItem from "@/views/cabinet-pages/programs/components/FilterItem";

export default {
  components: {FilterItem},
  methods: {
    ...mapActions("ProgramModule", ["GET_PROGRAMS"]),

    async filterChanged() {
      await this.GET_PROGRAMS();
    }
  },
  computed: {
    ...mapGetters("DictionaryModule", ["dictionaryList", "dictionaryLoading"]),
    ...mapGetters("ProgramModule", ["filterForm", "isLoading"])
  },
  created() {
    this.GET_PROGRAMS();
  }
};
</script>
