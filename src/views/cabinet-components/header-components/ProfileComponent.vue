<template>
  <div id="profileBlock" @click="goToProfile">
    <div class="imageBlock">
      <img v-if="profileInfo.avatar" :src="profileInfo.avatar" alt="GSC Avatar">
      <Icon v-else icon="mage:user-fill" style="color: #8E9DAF;" />
    </div>
    <p class="name">
      {{ profileInfo.first_name }}<br>
      {{ profileInfo.second_name }}
    </p>
<!--    <ArrowIcon />-->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
// import ArrowIcon from "@/components/icons/ArrowIcon";

export default {
  components:{
    // ArrowIcon
  },
  methods:{
    ...mapActions("UserModule", ["GET_USER_INFO"]),

    goToProfile() {
      this.$router.push({ name: "Profile" });
    }
  },
  computed: {
    ...mapGetters("UserModule", ["profileInfo"]),
  },
  created() {
    this.GET_USER_INFO();
  }
};
</script>