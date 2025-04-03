<template>
  <el-col :class="['stickyHeader', { scrolled: isScrolled }]">
    <el-row :gutter="40" align="middle">
      <el-col :span="12">
        <div class="headBlock">
          <img src="@/assets/img/utah.png" alt="">
          <p class="title">
            University of Utah
            <span>Соединенные Штаты Америки, Юта</span>
          </p>
        </div>
      </el-col>
      <el-col :span="12" class="text-right">
        <el-button class="medium" type="primary">Подать заявку</el-button>
        <el-button class="medium afterIcon" type="primary" plain>Перейти на сайт</el-button>
        <el-button class="medium afterIcon" type="primary" plain>В избранное <HeartIcon color="#1A73E8" /></el-button>
      </el-col>
    </el-row>
  </el-col>
</template>
<script>
import HeartIcon from "@/components/icons/HeartIcon";

export default {
  components:{
    HeartIcon
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
    }
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