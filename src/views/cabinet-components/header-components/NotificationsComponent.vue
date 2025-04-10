<template>
  <div class="defaultInlineBlock">
    <el-button type="info" class="onlyIcon" @click="drawer = true"><NotificationIcon /></el-button>

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
        <div class="emptyBlock" v-if="false">
          <img src="@/assets/img/bell.png" alt="">
          <p>Нет новых уведомлений</p>
        </div>
        <div class="notificationsList">
          <template v-for="(item, index) in list" :key="item.date">
            <NotificationItem :notification_data="item" />
            <hr v-if="index < list.length - 1" />
          </template>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import NotificationIcon from "@/components/icons/NotificationIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import NotificationItem from "@/components/NotificationItem";

export default {
  components:{
    NotificationIcon,
    CloseIcon,
    NotificationItem
  },
  data() {
    return {
      drawer: false,
      list: [
        {
          date: '02.02.2025',
          type: 'success',
          id: 100,
          comment: false
        },
        {
          date: '28.01.2025',
          type: 'edit',
          id: 123,
          comment: 'Пожалуйста, корректно укажите название университета в мотивационном письме. Если потребуется помощь, дайте знать!'
        }
      ]
    };
  }
};
</script>