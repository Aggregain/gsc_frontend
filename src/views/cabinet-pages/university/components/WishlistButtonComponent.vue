<template>
  <el-button
      @click="handleWishlistClick"
      class="medium afterIcon"
      :type="isInWishlist ? 'danger' : 'primary'"
      :disabled="wishlistLoading"
      plain
  >
    {{ isInWishlist?'В избранном':'В избранное' }}
    <HeartIcon :color="isInWishlist?'#D81B60':'#1A73E8'" :fill="isInWishlist?'#D81B60':''" />
  </el-button>
</template>

<script>
import HeartIcon from "@/components/icons/HeartIcon";
import {mapActions, mapGetters} from "vuex";

export default {
  components:{
    HeartIcon
  },
  methods: {
    ...mapActions("WishlistModule", ["GET_WISHLIST", "ADD_WISHLIST", "DELETE_WISHLIST"]),

    handleWishlistClick() {
      if (this.isInWishlist) {
        this.deleteWishlist();
      } else {
        this.addWishlistById();
      }
    },
    addWishlistById() {
      this.ADD_WISHLIST(this.universityInfo.id);
    },
    deleteWishlist() {
      if (!this.wishlistIdForDelete) return;
      this.DELETE_WISHLIST(this.wishlistIdForDelete);
    }
  },
  computed:{
    ...mapGetters("UniversityModule", ["universityInfo"]),
    ...mapGetters("WishlistModule", ["wishlistData", "wishlistLoading"]),

    isInWishlist() {
      return this.wishlistData.some(
          item => item.education_place?.id === this.universityInfo?.id
      );
    },
    wishlistIdForDelete() {
      const found = this.wishlistData.find(
          item => item.education_place?.id === this.universityInfo?.id
      );
      return found ? found.id : null;
    }
  },
  created() {
    this.GET_WISHLIST();
  }
}
</script>