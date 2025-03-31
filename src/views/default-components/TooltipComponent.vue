<template>
  <el-tooltip
      class="box-item"
      effect="dark"
      :placement="position"
  >
    <template #content >
      <p class="title" v-if="title">{{ title }}</p>
      <a class="link" v-if="link" target="_blank" :href="link">Read more</a>
      <p class="tooltipText" v-html="text"></p>
    </template>
<!--    <img src="@/assets/img/new/tooltip.svg" alt="">-->
  </el-tooltip>
</template>
<script>
export default {
  props:{
    title: String,
    text: String,
    link: String,
    position: {
      type: String,
      default: 'bottom'
    }
  }
}
</script>
