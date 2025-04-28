<template>
  <el-row :gutter="30" id="wishlistPage" v-loading="wishlistLoading">
    <el-col :span="24" v-if="wishlistData.length>0">
      <el-row :gutter="40" align="middle">
        <el-col :span="12">
          <h2>Университета в избранном: {{ wishlistData.length }}</h2>
        </el-col>
        <el-col :span="12" class="text-right">
          <el-button class="mini afterIcon secondStyle" type="primary" plain>По названию <SortIcon /></el-button>
        </el-col>
      </el-row>

      <WishlistProgramsList />
    </el-col>

    <el-col :span="24" v-else>
      <div class="defaultEmptyBlock">
        <el-card shadow="never">
          <img src="@/assets/img/empty-wishlist.png" alt="" />
          <p class="custom-empty-text">Здесь будут ваши избранные</p>
          <router-link :to="{ name: 'Programs' }"><el-button type="primary">Список программ</el-button></router-link>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import WishlistProgramsList from "./components/WishlistProgramsList.vue";
import SortIcon from "@/components/icons/SortIcon.vue";

export default {
  components:{
    WishlistProgramsList,
    SortIcon
  },
  data:()=>({
  }),
  methods: {
    ...mapActions("WishlistModule", ["GET_WISHLIST"]),
  },
  computed: {
    ...mapGetters("WishlistModule", ["wishlistData", "wishlistLoading"])
  },
  created() {
    this.GET_WISHLIST();
  }
}
</script>