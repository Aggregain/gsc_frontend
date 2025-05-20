<template>
  <div class="defaultAlertBlock" :class="statusInfo.class">
    <Icon :icon="statusInfo.icon" />
    <div class="content">
      <p class="title">{{ statusInfo.title }}</p>
      <p class="text">{{ statusInfo.text }}</p>
      <p class="comment" v-if="status === 'FOR_REVISION' && comment">
        <span class="title">📌 Комментарий менеджера:</span>
        <span class="text">{{ comment }}</span>
        <a v-if="comment_file" :href="comment_file">Скачать файл</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    status: String,
    comment: String,
    comment_file: String,
  },
  computed: {
    statusInfo() {
      switch (this.status) {
        case "IN_PROGRESS":
          return {
            title: "Ваша заявка в обработке",
            text: "Пожалуйста, подождите, пока мы всё проверим",
            icon: "material-symbols:info-rounded",
            class: "status-in-progress"
          };
        case "ACCEPTED":
          return {
            title: "Ваша заявка принята! 🎉",
            text: "Вы прошли предварительный этап, поздравляем!",
            icon: "lets-icons:check-round-fill",
            class: "successStyle"
          };
        case "FOR_REVISION":
          return {
            title: "Заявка отправлена на доработку",
            text: "Пожалуйста, исправьте замечания и отправьте снова",
            icon: "material-symbols:info-rounded",
            class: "errorStyle"
          };
        case "DENIED":
          return {
            title: "Заявка отклонена",
            text: "К сожалению, заявка не прошла отбор",
            icon: "material-symbols:info-rounded",
            class: "status-denied"
          };
        case "FOR_CONSIDERATION":
          return {
            title: "Заявка на рассмотрении в университете",
            text: "Ожидается решение университета",
            icon: "material-symbols:info-rounded",
            class: "status-consideration"
          };
        default:
          return {
            title: "Страница заявки",
            text: "",
            icon: "material-symbols:info-rounded",
            class: "status-default"
          };
      }
    }
  }
}
</script>