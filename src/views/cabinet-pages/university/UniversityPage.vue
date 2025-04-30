<template>
  <el-row :gutter="40" id="universityPage" v-loading="isLoading">

    <template v-if="universityInfo.id">
      <HeadBlock />
      <el-col :span="18">
        <div class="mainImage" v-if="universityInfo.image">
          <img :src="universityInfo.image" alt="">
        </div>

        <TabsComponent />
      </el-col>
      <el-col :span="6">
        <RightBlock />
      </el-col>
    </template>

  </el-row>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from "vuex";
import HeadBlock from "./components/HeadBlock"
import TabsComponent from "./components/TabsComponent"
import RightBlock from "./components/RightBlock"

export default {
  components: {
    HeadBlock,
    TabsComponent,
    RightBlock
  },
  methods: {
    ...mapActions("UniversityModule", ["GET_UNIVERSITY_INFO"]),
    ...mapMutations("UniversityModule", ["SET_INFO"]),
    getUniversityInfo() {
      this.GET_UNIVERSITY_INFO(this.universityId);
    }
  },
  computed: {
    universityId() {
      return this.$route.params.university_id;
    },
    ...mapGetters("UniversityModule", ["universityInfo", "isLoading"])
  },
  created() {
    this.getUniversityInfo();
  },
  beforeRouteUpdate(to, from, next) {
    if (to.params.university_id !== from.params.university_id) {
      this.getUniversityInfo();
    }
    next();
  },
  beforeRouteLeave(to, from, next) {
    this.SET_INFO({});
    next();
  }
};
</script>