<template>
  <div class="defaultInlineBlock">
    <el-button type="info" class="onlyIcon" @click="openDrawer">
      <div class="custom-badge" v-if="unreadCount>0">{{ unreadCount }}</div>
      <NotificationIcon />
    </el-button>

    <el-drawer
        v-model="drawer"
        :show-close="false"
        title="Уведомления"
        direction="rtl"
        size="500px"
    >
      <template #header="{ close, titleId, titleClass }">
        <h4 :id="titleId" :class="titleClass">Уведомления</h4>
        <CloseIcon @click="close" class="closeButton" />
      </template>
      <div class="drawerInfo text-center">

        <div class="notificationsList" v-if="notificationsData.length>0">
          <template v-for="(item, index) in notificationsData" :key="item.id">
            <NotificationItem :notification_data="item" />
            <hr v-if="index < notificationsData.length - 1" />
          </template>
        </div>

        <div class="emptyBlock" v-else>
          <img src="@/assets/img/bell.png" alt="">
          <p>Нет новых уведомлений</p>
        </div>

      </div>
    </el-drawer>
  </div>
</template>

<script>
import NotificationIcon from "@/components/icons/NotificationIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import NotificationItem from "@/components/NotificationItem";
import {mapActions, mapGetters} from "vuex";

export default {
  components:{
    NotificationIcon,
    CloseIcon,
    NotificationItem
  },
  data() {
    return {
      drawer: false
    };
  },
  methods: {
    ...mapActions("NotificationModule", ["GET_NOTIFICATIONS", "READ_NOTIFICATIONS"]),

    openDrawer() {
      this.drawer = true;
      this.READ_NOTIFICATIONS();
    }
  },
  computed: {
    ...mapGetters("NotificationModule", ["notificationsData"]),

    unreadCount() {
      return this.notificationsData.filter((n) => !n.is_seen).length;
    },
  },
  created() {
    this.GET_NOTIFICATIONS();
  },
  watch: {
    $route() {
      this.GET_NOTIFICATIONS();
    }
  }
};
</script>