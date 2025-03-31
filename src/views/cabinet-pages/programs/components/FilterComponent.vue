<template>
  <el-form :model="filterForm" class="filterForm">
    <FilterItem
        v-model="filterForm.example_type"
        @update:modelValue="filterChanged"
        title="Страна обучения"
        name="example_type"
        :options="[
        { label: 'Бакалавриат', value: 'type1' },
        { label: 'Магистратура', value: 'type2' },
        { label: 'Программа 3', value: 'type3' },
        { label: 'Программа 4', value: 'type4' },
        { label: 'Программа 5', value: 'type5' }
      ]"
    />

    <FilterItem
        v-model="filterForm.example_type2"
        @update:modelValue="filterChanged"
        title="Стоимость обучения"
        name="example_type2"
        :options="[
        { label: 'Бакалавриат', value: 'type1' },
        { label: 'Магистратура', value: 'type2' },
        { label: 'Программа 3', value: 'type3' },
        { label: 'Программа 4', value: 'type4' },
        { label: 'Программа 5', value: 'type5' }
      ]"
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
    ...mapGetters("ProgramModule", ["filterForm"])
  }
};
</script>
