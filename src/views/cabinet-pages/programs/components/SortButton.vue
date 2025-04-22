<template>
  <el-dropdown placement="bottom-end" trigger="click" @command="handleDropdownCommand" :disabled="isLoading">
    <el-button class="mini afterIcon secondStyle" type="primary" plain>
      {{ options.find(option => option.value === filterForm.ordering)?.label || 'По названию' }} <SortIcon />
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="item in options" v-bind:key="item.value" :command="item.value">{{ item.label }}</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";
import SortIcon from "@/components/icons/SortIcon";

export default {
  components:{ SortIcon },
  data:()=>({
    options:[
      {value: 'name', label: 'По названию'},
      {value: 'price', label: 'По цене'},
    ]
  }),
  methods: {
    ...mapActions("ProgramModule", ["GET_PROGRAMS"]),
    ...mapMutations("ProgramModule", ["SET_ORDERING_FILTER"]),

    handleDropdownCommand(value) {
      this.SET_ORDERING_FILTER(value);
      this.GET_PROGRAMS();
    },
  },
  computed: {
    ...mapGetters("ProgramModule", ["filterForm", "isLoading"])
  },
}
</script>