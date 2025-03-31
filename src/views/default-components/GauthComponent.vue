<template>
  <div class="googleOauthBlock">
    <GoogleLogin :callback="callback"></GoogleLogin>
  </div>
</template>

<script>
import {ON_GOOGLE_OAUTH, SET_REFRESH_TOKEN, SET_TOKEN, SET_USER_INFO} from "@/store/modules/AuthModule";

export default {
  props:{
    invitation: [String, Number]
  },
  data(){
    return{
      callback:(response) => {
        this.onGoogleOauth(response.credential);
        this.$emit('loading-true');
      }
    }
  },
  methods: {
    async onGoogleOauth(jwt_token) {
      try {
        let form = {
          "auth_token": jwt_token
        };
        if(this.invitation!==''){
          form.referral_code = this.invitation;
        }
        const data = await this.$store.dispatch(ON_GOOGLE_OAUTH, form);
        this.$store.commit(SET_TOKEN, data.access);
        this.$store.commit(SET_REFRESH_TOKEN, data.refresh);
        this.$store.commit(SET_USER_INFO, data.user.email);
        // eslint-disable-next-line no-undef
        sendMetric('login');
        if(this.savedAlert!==''){
          window.location = '/create-alert';
        }else{
          window.location = '/home';
        }
      } catch (e) {
        this.$emit('loading-false');
        this.$message.error(e.response.data.detail);
      }
    }
  }
};
</script>
