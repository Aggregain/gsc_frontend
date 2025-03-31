import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "./assets/app.scss";
import { Icon } from '@iconify/vue';

createApp(App).use(store).use(router).use(ElementPlus).component('Icon', Icon).mount('#app')
