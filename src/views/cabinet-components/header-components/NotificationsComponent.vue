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
        <div class="emptyBlock">
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

export default {
  components:{
    NotificationIcon,
    CloseIcon
  },
  data() {
    return {
      drawer: false
    };
  }
};
</script>