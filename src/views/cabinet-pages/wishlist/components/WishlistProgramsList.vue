<template>
  <el-row :gutter="24" class="wishlistList">
    <template v-if="wishlistData?.length>0">
      <el-col :xs={span:24} :span="8" v-for="item in wishlistData" v-bind:key="item">
        <el-card class="programCard" shadow="never" @click="goToUniversity(item.education_place.id)">
          <div class="head">
            <div class="logoBlock">
              <img v-if="item?.education_place?.logo" :src="item.education_place.logo" alt="">
            </div>
            <p class="title">
              {{ (n => n.length > 32 ? n.slice(0, 32) + '...' : n)(item.education_place.name) }}
              <span>{{ item.education_place?.country_name }}, {{ item.education_place?.city_name }}</span>
            </p>
            <el-button type="info" class="onlyIcon medium-second" @click.stop="deleteWishlist(item.id)"><HeartIcon :color="'#D81B60'" :fill="'#D81B60'" /></el-button>
          </div>
          <div class="body">
            <p><span class="label">Рейтинг университета:</span> <span>{{ parseInt(item.education_place?.rating) || "-" }}</span></p>
          </div>
        </el-card>
      </el-col>
    </template>
  </el-row>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import HeartIcon from "@/components/icons/HeartIcon";

export default {
  components: {
    HeartIcon
  },
  methods: {
    ...mapActions("WishlistModule", ["DELETE_WISHLIST"]),

    deleteWishlist(id) {
      this.DELETE_WISHLIST(id);
    },
    goToUniversity(id) {
      this.$router.push({ name: "University", params:{ university_id: id } });
    }
  },
  computed: {
    ...mapGetters("WishlistModule", ["wishlistData"])
  }
};
</script>