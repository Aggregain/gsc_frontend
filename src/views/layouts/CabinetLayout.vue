<template>
  <div class="cabinet-layout">
    <el-container id="main-container">
      <AsideComponent />
      <el-container id="inner-container">
        <el-header>
          <HeaderComponent />
        </el-header>
        <el-main id="main-block">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import AsideComponent from '@/views/cabinet-components/AsideComponent'
import HeaderComponent from '@/views/cabinet-components/HeaderComponent'

export default {
  name: 'CabinetLayout',
  components:{
    AsideComponent,
    HeaderComponent
  },
  methods: {
    ...mapActions("DictionaryModule", ["GET_DICTIONARY"]),
  },
  created() {
    this.GET_DICTIONARY();
  },
};
</script>