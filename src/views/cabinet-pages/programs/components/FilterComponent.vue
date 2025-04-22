<template>
  <el-form :model="filterForm" class="filterForm">
    <FilterItem
        v-if="filterOptions?.countries"
        v-model="filterForm.country"
        @update:modelValue="filterChanged"
        title="Страна обучения"
        name="country"
        :show="dictionaryLoading"
        :loading="isLoading"
        :options="getOptionsByFilter('countries', 'countries')"
    />

    <FilterItem
        v-if="filterOptions?.cities"
        v-model="filterForm.city"
        @update:modelValue="filterChanged"
        title="Город обучения"
        name="city"
        :show="dictionaryLoading"
        :loading="isLoading"
        :options="getOptionsByFilter('cities', 'cities')"
    />

    <FilterItem
        v-if="filterOptions?.programs"
        v-model="filterForm.name"
        @update:modelValue="filterChanged"
        title="Тип программы"
        name="name"
        :show="dictionaryLoading"
        :loading="isLoading"
        :options="getOptionsByFilter('programs','degrees')"
    />

    <FilterItem
        v-if="filterOptions?.specialty_groups"
        v-model="filterForm.specialty_group"
        @update:modelValue="filterChanged"
        title="Специальность"
        name="specialty_group"
        :show="dictionaryLoading"
        :loading="isLoading"
        :options="getOptionsByFilter('specialty_groups','specialty_groups')"
    />

    <PriceFilterItem title="Стоимость обучения" />
  </el-form>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import FilterItem from "./FilterItem";
import PriceFilterItem from "./PriceFilterItem";

export default {
  components: { FilterItem, PriceFilterItem },
  methods: {
    ...mapActions("ProgramModule", ["GET_PROGRAMS"]),

    filterChanged() {
      this.GET_PROGRAMS();
    },
    getOptionsByFilter(key, dict_key) {
      const ids = this.filterOptions[key] || [];
      const dict = this.dictionaryList[dict_key] || [];
      return ids.map(id => dict.find(item => item.id === id)).filter(Boolean);
    }
  },
  computed: {
    ...mapGetters("DictionaryModule", ["dictionaryList", "dictionaryLoading"]),
    ...mapGetters("ProgramModule", ["filterForm", "filterOptions", "isLoading"])
  },
  created() {
    this.GET_PROGRAMS();
  }
};
</script>
