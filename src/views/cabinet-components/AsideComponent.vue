<template>
  <el-aside
      :class="{ opened: asideOpened }"
      @mouseover.passive="openAside"
      @mouseleave.passive="closeAside">
    <div class="asideInBlock">
      <div class="logo">
        <img src="@/assets/logo.png" alt="Logo">
      </div>
      <ul class="menu">
        <li v-for="item in menuItems" :key="item.id">
          <router-link :to="item.link">
            <el-button
                :class="{ active: activeNav === item.id, onlyIcon: !asideOpened }"
                class="fullSize">
              <component :is="item.icon" />
              <span>{{ item.label }}</span>
            </el-button>
          </router-link>
        </li>
      </ul>
      <el-button type="danger"
                 :class="{ onlyIcon: !asideOpened }"
                 class="afterIcon fullSize logoutButton"
                 @click="logoutFunc"
                 plain>
        <span>Выйти</span>
        <LogoutIcon />
      </el-button>
    </div>
  </el-aside>
</template>
<script>
import {mapActions, mapGetters} from "vuex";
import { userMenuItems } from "@/constants/userMenu.js";
import { managerMenuItems } from "@/constants/managerMenu.js";
import LogoutIcon from "@/components/icons/LogoutIcon";

export default {
  components:{
    LogoutIcon
  },
  data() {
    return {
      userMenuItems,
      managerMenuItems,
      asideOpened: false,
    };
  },
  methods: {
    ...mapActions("AuthModule", ["ON_LOGOUT"]),
    openAside() {
      this.asideOpened = true;
    },
    closeAside() {
      this.asideOpened = false;
    },
    logoutFunc() {
      this.ON_LOGOUT();
    }
  },
  computed: {
    ...mapGetters("AuthModule", ["isStaff"]),

    activeNav() {
      return this.$route.meta.activeNav;
    },
    menuItems() {
      return this.isStaff === true || this.isStaff === 'true'
          ? this.managerMenuItems
          : this.userMenuItems;
    }
  },
};
</script>
