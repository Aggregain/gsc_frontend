<template>
  <div class="notificationItem">
    <div class="top">
      <p class="label">Мои заявки</p>
      <p class="date">{{ notification_data.date }}</p>
    </div>

    <p class="info" v-if="notification_data.type === 'success'">
      Ваша заявка принята менеджером! 🎉<br>
      Ознакомьтесь с <router-link :to="{ name: 'University', params: { university_id: notification_data.id } }">дальнейшими шагами</router-link>
    </p>

    <p class="info" v-else-if="notification_data.type === 'edit'">
      Ваша заявка отправлена на доработку.<br>
      Менеджер оставил комментарий к заявке
      <router-link :to="{ name: 'University', params: { university_id: notification_data.id } }">№{{ notification_data.id }}</router-link>
    </p>

    <p class="info" v-else>
      Уведомление по заявке <router-link :to="{ name: 'University', params: { university_id: notification_data.id } }">№{{ notification_data.id }}</router-link>
    </p>

    <p class="comment" v-if="notification_data.comment">
      {{ notification_data.comment }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    notification_data: {
      type: Object,
      required: true
    }
  }
};
</script>