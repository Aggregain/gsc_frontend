<template>
  <el-col :class="['stickyHeader', { scrolled: isScrolled }]">
    <el-row :gutter="40" align="middle">
      <el-col :xs={span:24} :span="14">
        <div class="headBlock">
          <div class="logoBlock">
            <img v-if="universityInfo.logo" :src="universityInfo.logo" alt="">
          </div>
          <p class="title">
            {{ universityInfo?.name }}
            <span>{{ universityInfo?.country_name }}, {{ universityInfo?.city_name }}</span>
          </p>
        </div>
      </el-col>
      <el-col :xs={span:24} :span="10" class="text-right">
        <el-button v-if="universityInfo.id" :loading="isLoading" @click="createApplication" class="medium hideForMobile" type="primary">Подать заявку</el-button>
        <el-button v-if="universityInfo.link" @click="openLink" class="medium afterIcon" type="primary" plain>Перейти на сайт</el-button>
        <WishlistButtonComponent v-if="universityInfo.id" />
      </el-col>
    </el-row>
  </el-col>
</template>
<script>
import {mapGetters} from "vuex";
import createApplicationMixin from "@/mixins/createApplicationMixin";
import WishlistButtonComponent from "./WishlistButtonComponent.vue";

export default {
  mixins: [createApplicationMixin],
  components: {
    WishlistButtonComponent
  },
  data:()=>({
    isScrolled: false
  }),
  methods: {
    handleScroll() {
      const mainBlock = document.getElementById("main-block");
      if (mainBlock) {
        this.isScrolled = mainBlock.scrollTop > 0;
      }
    },
    openLink() {
      window.open(this.universityInfo.link, '_blank');
    }
  },
  computed:{
    ...mapGetters("UniversityModule", ["universityInfo"]),
    ...mapGetters("ApplicationModule", ["isLoading"]),
  },
  mounted() {
    const mainBlock = document.getElementById("main-block");
    if (mainBlock) {
      mainBlock.addEventListener("scroll", this.handleScroll);
    }
  },
  beforeUnmount() {
    const mainBlock = document.getElementById("main-block");
    if (mainBlock) {
      mainBlock.removeEventListener("scroll", this.handleScroll);
    }
  }
}
</script>