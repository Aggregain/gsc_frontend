import { createApp } from 'vue'
import App from './App.vue'
import formatters from './plugins/formatters'
import router from './router'
import store from './store'
import vue3GoogleLogin from 'vue3-google-login'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "./assets/app.scss";
import { Icon } from '@iconify/vue';
const CLIENT_ID = "531681254897-ttlqd4r9dh384k8tjt3shgsc7aoo9s5q.apps.googleusercontent.com";

createApp(App).use(formatters).use(store).use(vue3GoogleLogin,{clientId: CLIENT_ID}).use(router).use(ElementPlus).component('Icon', Icon).mount('#app')
