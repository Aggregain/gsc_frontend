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
        case "DRAFT":
          return "Черновик";
        case "IN_PROGRESS":
          return "В работе";
        case "ACCEPTED":
          return "Принято";
        case "FOR_REVISION":
          return "На доработку";
        case "DENIED":
          return "Отклонено";
        case "FOR_CONSIDERATION":
          return "На рассмотрении в университете";
        default:
          return "Неизвестно";
      }
    }
  }
}
</script>