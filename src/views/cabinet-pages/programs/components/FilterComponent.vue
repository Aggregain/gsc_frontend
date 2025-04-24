<template>
  <el-form :model="filterForm" class="filterForm">
    <FilterItem
        v-if="filterOptions?.countries"
        v-model="filterForm.countries"
        @update:modelValue="filterChanged"
        title="Страна обучения"
        name="countries"
        :show="dictionaryLoading"
        :loading="isLoading"
        :options="getOptionsByFilter('countries', 'countries')"
    />

    <FilterItem
        v-if="filterOptions?.cities"
        v-model="filterForm.cities"
        @update:modelValue="filterChanged"
        title="Город обучения"
        name="cities"
        :show="dictionaryLoading"
        :loading="isLoading"
        :options="getOptionsByFilter('cities', 'cities')"
    />

    <FilterItem
        v-if="filterOptions?.names"
        v-model="filterForm.names"
        @update:modelValue="filterChanged"
        title="Тип программы"
        name="names"
        :show="dictionaryLoading"
        :loading="isLoading"
        :options="getOptionsByFilter('names','degrees')"
    />

    <FilterItem
        v-if="filterOptions?.specialty_groups"
        v-model="filterForm.specialty_groups"
        @update:modelValue="filterChanged"
        title="Специальность"
        name="specialty_groups"
        :show="dictionaryLoading"
        :loading="isLoading"
        :options="getOptionsByFilter('specialty_groups','specialty_groups')"
    />

    <FilterItem
        v-if="filterOptions?.certificates"
        v-model="filterForm.certificates"
        @update:modelValue="filterChanged"
        title="Квалификации"
        name="certificates"
        :show="dictionaryLoading"
        :loading="isLoading"
        :options="getOptionsByFilter('certificates','certificates')"
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
