<template>
  <el-button
      class="onlyIcon mini forMobile secondStyle"
      style="margin-left: 1.2rem;"
      type="primary"
      :disabled="isLoading"
      @click="showFilter = !showFilter"
      plain>
    <FilterIcon />
  </el-button>
  <el-form :model="filterForm" class="filterForm" :class="showFilter?'opened':'hidden'">
    <h3>Фильтр</h3>
    <CloseIcon @click="showFilter = false" class="closeButton" />
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

    <el-button
        class="medium"
        type="primary"
        @click="saveFilter">
      Применить
    </el-button>
    <el-button v-if="Object.keys(filterForm).length>0" class="medium" type="danger" @click="clearFilter">Сбросить</el-button>
  </el-form>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";
import FilterItem from "./FilterItem";
import PriceFilterItem from "./PriceFilterItem";
import FilterIcon from "@/components/icons/FilterIcon";
import CloseIcon from "@/components/icons/CloseIcon";

export default {
  components: {
    FilterItem,
    PriceFilterItem,
    FilterIcon,
    CloseIcon
  },
  data:()=>({
    showFilter: false
  }),
  methods: {
    ...mapActions("ProgramModule", ["GET_PROGRAMS"]),
    ...mapMutations("ProgramModule", ["UPDATE_FILTER_DATA"]),

    filterChanged() {
      this.GET_PROGRAMS();
    },
    saveFilter() {
      this.GET_PROGRAMS();
      this.showFilter = false;
    },
    clearFilter() {
      this.UPDATE_FILTER_DATA({});
      this.GET_PROGRAMS();
      this.showFilter = false;
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
  }
};
</script>
