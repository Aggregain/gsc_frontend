<template>
  <p class="statusText" :class="status">{{ statusText }}</p>
</template>

<script>
export default {
  props: {
    status: String
  },
  computed: {
    statusText() {
      switch (this.status) {
        case "pending":
          return "В обработке";
        case "success":
          return "Принято";
        case "edit":
          return "На доработку";
        case "reject":
          return "Отклонено";
        case "university":
          return "На рассмотрении в университете";
        default:
          return "Неизвестно";
      }
    }
  }
}
</script>