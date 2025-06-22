<template>
  <el-row :gutter="30" align="middle">
    <el-col :xs="{span:14}" :sm="{span:12}" class="mobileAlignCenter">
      <div class="forMobile mobileLogo">
        <img src="@/assets/logo.png" alt="Logo">
      </div>
      <h1 id="mainTitle">{{ this.pageTitle }}</h1>
    </el-col>
    <el-col :xs="{span:10}" :sm="{span:12}" class="text-right">
      <NotificationsComponent v-if="!showNotifications" />
      <ProfileComponent />
    </el-col>
  </el-row>
</template>

<script>
import NotificationsComponent from "@/views/cabinet-components/header-components/NotificationsComponent";
import ProfileComponent from "@/views/cabinet-components/header-components/ProfileComponent";
import {mapGetters} from "vuex";

export default {
  components:{
    NotificationsComponent,
    ProfileComponent
  },
  methods:{
  },
  computed: {
    ...mapGetters("AuthModule", ["isStaff"]),

    showNotifications() {
      return this.isStaff === true || this.isStaff === 'true'
    },
    pageTitle() {
      return this.$route.meta.title;
    }
  }
}
</script>
