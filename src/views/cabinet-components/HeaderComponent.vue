<template>
  <el-row :gutter="30" align="middle">
    <el-col :xs="{span:12}" :sm="{span:12}">
      <h1>{{ this.pageTitle }} {{ this.userInfo }}</h1>
    </el-col>
    <el-col :xs="{span:12}" :sm="{span:12}" class="text-right">
      <NotificationsComponent />
      <ProfileComponent />
    </el-col>
  </el-row>
</template>

<script>
import NotificationsComponent from "@/views/cabinet-components/header-components/NotificationsComponent";
import ProfileComponent from "@/views/cabinet-components/header-components/ProfileComponent";

export default {
  components:{
    NotificationsComponent,
    ProfileComponent
  },
  methods:{
  },
  computed: {
    pageTitle() {
      return this.$route.meta.title;
    },
    userInfo() {
      return this.$store.getters.get_user_info;
    }
  }
}
</script>
