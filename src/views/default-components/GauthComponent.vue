<template>
  <div class="googleOauthBlock" v-loading="isLoading">
    <GoogleLogin :callback="callback">
      <template #default="{ onClick }">
        <el-button @click="onClick" class="fullSize bigFS white&#45;&#45;style"><GoogleIcon />Продолжить с Google</el-button>
      </template>
    </GoogleLogin>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";
import GoogleIcon from "@/components/icons/GoogleIcon"

export default {
  components: {
    GoogleIcon
  },
  data(){
    return{
      callback:(response) => {
        this.onGoogleOauth(response.code);
      }
    }
  },
  methods: {
    ...mapActions("AuthModule", ["ON_GOOGLE_OAUTH"]),
    ...mapMutations('AuthModule', ['SET_TOKENS']),

    async onGoogleOauth(jwt_token) {
      const result = await this.ON_GOOGLE_OAUTH(jwt_token);
      if (result.success) {
        this.SET_TOKENS(result.data);
        if(result.data.is_staff){
          window.location = '/manager';
        }else{
          window.location = '/cabinet';
        }
      }
    }
  },
  computed: {
    ...mapGetters("AuthModule", ["authForm", "isLoading"])
  }
};
</script>
