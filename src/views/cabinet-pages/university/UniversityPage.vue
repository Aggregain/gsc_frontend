<template>
  <el-row :gutter="40" id="universityPage" v-loading="isLoading">
    <HeadBlock />
    <el-col :span="18">
      <div class="mainImage">
        <img src="@/assets/img/university.png" alt="">
      </div>

      <TabsComponent />
    </el-col>
    <el-col :span="6">
      <RightBlock />
    </el-col>
  </el-row>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
import HeadBlock from "./components/HeadBlock"
import TabsComponent from "./components/TabsComponent"
import RightBlock from "./components/RightBlock"

export default {
  components: {
    HeadBlock,
    TabsComponent,
    RightBlock
  },
  computed: {
    universityId() {
      return this.$route.params.university_id;
    },
    ...mapGetters("UniversityModule", ["universityInfo", "isLoading"])
  },
  methods: {
    ...mapActions("UniversityModule", ["GET_UNIVERSITY_INFO"]),
    fetchUniversityInfo(id) {
      this.GET_UNIVERSITY_INFO(id);
    }
  },
  created() {
    this.fetchUniversityInfo(this.universityId);
  },
  beforeRouteUpdate(to, from, next) {
    if (to.params.university_id !== from.params.university_id) {
      this.fetchUniversityInfo(to.params.university_id);
    }
    next();
  }
};
</script>