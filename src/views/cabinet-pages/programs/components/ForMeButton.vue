<template>
  <el-button
      class="mini afterIcon"
      v-if="this.profileInfo?.degree"
      @click="forMeFilter"
      :type="forMeStatus?'success':'primary'"
      :disabled="isLoading"
      plain>
    Подходящие мне <StarIcon :color="forMeStatus?'green':'#1A73E8'" />
  </el-button>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from "vuex";
import StarIcon from "@/components/icons/StarIcon";

export default {
  components:{
    StarIcon,
  },
  methods: {
    ...mapActions("ProgramModule", ["GET_PROGRAMS"]),
    ...mapMutations("ProgramModule", ["UPDATE_FILTER_DATA"]),

    forMeFilter(){
      if(this.profileInfo.degree && !this.forMeStatus){
        this.UPDATE_FILTER_DATA({names:[this.profileInfo.degree]});
        this.GET_PROGRAMS();
      }
    }
  },
  computed: {
    ...mapGetters("UserModule", ["profileInfo"]),
    ...mapGetters("ProgramModule", ["filterForm", "isLoading"]),
    forMeStatus(){
      return Array.isArray(this.filterForm?.names) && this.filterForm.names.some(item => item === this.profileInfo?.degree);
    }
  }
}
</script>