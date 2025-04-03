<template>
  <el-row :gutter="40" id="universityPage" v-loading="isLoading">
    <HeadBlock />
    <el-col :span="18">
      <div class="mainImage">
        <img src="@/assets/img/university.png" alt="">
      </div>

      <TabsComponent />
    </el-col>
  </el-row>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
import HeadBlock from "./components/HeadBlock"
import TabsComponent from "./components/TabsComponent"

export default {
  components:{
    HeadBlock,
    TabsComponent
  },
  data:()=>({
  }),
  methods:{
    ...mapActions("UniversityModule", ["GET_UNIVERSITY_INFO"]),
  },
  computed: {
    universityId() {
      return this.$route.params.university_id;
    },
    ...mapGetters("UniversityModule", ["universityInfo", "isLoading"])
  },
  created() {
    // this.GET_UNIVERSITY_INFO(this.universityId);
  }
}
</script>