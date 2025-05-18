<template>
  <el-dialog
      v-model="completeDialog"
      width="500px"
  >
    <div class="iconBlock">
      <Icon icon="akar-icons:circle-check-fill" color="#34A853"></Icon>
    </div>
    <p class="title">{{ completeDialogData?.title }}</p>
    <p class="description">{{ completeDialogData?.description }}</p>
    <router-link :to="{ name: completeDialogData?.route_name || '#' }">
      <el-button type="primary" class="medium">Вернуться к заявкам</el-button>
    </router-link>
  </el-dialog>
</template>

<script>
export default {
  props: {
    completeDialogData: Object
  },
  data:()=>({
    completeDialog: true
  }),
}
</script>