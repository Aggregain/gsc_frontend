<template>
  <el-container>
    <el-row :gutter="30" align="middle">
      <el-col :xs="{span:24}" :sm="{span:24}">
        Header {{ this.userInfo }}
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
export default {
  methods:{
  },
  computed: {
    userInfo() {
      return this.$store.getters.get_user_info;
    }
  }
}
</script>
