<template>
  <div class="common-layout">
    <el-container id="main-container">
      <el-header>
        <HeaderComponent />
      </el-header>
      <el-main id="main-block">
        <router-view></router-view>
      </el-main>
      <el-footer v-if="!footerHidden">
        <FooterComponent />
      </el-footer>
    </el-container>
  </div>

</template>

<script>
import HeaderComponent from '@/views/default-components/HeaderComponent'
import FooterComponent from '@/views/default-components/FooterComponent'
export default {
  name: 'PublicLayout',
  components:{
    HeaderComponent,
    FooterComponent
  },
  computed: {
    footerHidden() {
      return this.$route.meta.footerHidden;
    },
  },
};
</script>
