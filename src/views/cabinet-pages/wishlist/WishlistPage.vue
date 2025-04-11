<template>
  <el-row :gutter="30" id="wishlistPage">
    <el-col :span="24" v-if="true">
      <el-row :gutter="40" align="middle">
        <el-col :span="12">
          <h2>В избранном 3 университета</h2>
        </el-col>
        <el-col :span="12" class="text-right">
          <el-button class="mini afterIcon secondStyle" type="primary" plain>По названию <SortIcon /></el-button>
        </el-col>
      </el-row>

      <WishlistProgramsList />
    </el-col>

    <el-col :span="24" v-if="false">
      <div class="defaultEmptyBlock">
        <el-card shadow="never">
          <img src="@/assets/img/empty-wishlist.png" alt="" />
          <p class="custom-empty-text">Здесь будут ваши избранные <span>Добавьте программы, которые вам понравились</span></p>
          <el-button type="primary">Выбрать программы</el-button>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import {mapActions} from "vuex";
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
  },
  created() {
    // this.GET_WISHLIST();
  }
}
</script>