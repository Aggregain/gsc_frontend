<template>
  <div class="notificationItem">
    <div class="top">
      <p class="label">Мои заявки</p>
      <p class="date">{{ $formatDate(notification_data.created_at) }}</p>
    </div>

    <p class="info" v-if="notification_data.type === 'DRAFT'">
      Заявка №{{ notification_data?.application?.id }} сохранена как черновик. <br>Пожалуйста, завершите заполнение и отправьте её.
      <router-link :to="{ name: 'ViewApplication', params: { application_id: notification_data?.application?.id } }">Открыть черновик</router-link>
    </p>

    <p class="info" v-else-if="notification_data.type === 'IN_PROGRESS'">
      Заявка №{{ notification_data?.application?.id }} успешно отправлена и сейчас обрабатывается. Мы сообщим, как только появятся новости!
      <router-link :to="{ name: 'ViewApplication', params: { application_id: notification_data?.application?.id } }">Посмотреть заявку</router-link>
    </p>

    <p class="info" v-else-if="notification_data.type === 'ACCEPTED'">
      Ваша заявка принята менеджером! 🎉<br>
      Ознакомьтесь с <router-link :to="{ name: 'ViewApplication', params: { application_id: notification_data?.application?.id } }">дальнейшими шагами</router-link>
    </p>

    <p class="info" v-else-if="notification_data.type === 'FOR_REVISION'">
      Ваша заявка отправлена на доработку.<br>
      Менеджер оставил комментарий к заявке
      <router-link :to="{ name: 'ViewApplication', params: { application_id: notification_data?.application?.id } }">№{{ notification_data?.application?.id }}</router-link>
    </p>

    <p class="info" v-else-if="notification_data.type === 'FOR_CONSIDERATION'">
      Заявка №{{ notification_data?.application?.id }} рассматривается университетом. Мы сообщим вам, как только поступит ответ.
      <router-link :to="{ name: 'ViewApplication', params: { application_id: notification_data?.application?.id } }">Посмотреть заявку</router-link>
    </p>

    <p class="info" v-else-if="notification_data.type === 'DENIED'">
      К сожалению, заявка №14 отклонена.<br>
      Не переживайте, вы можете выбрать другую программу.
      <router-link :to="{ name: 'ViewApplication', params: { application_id: notification_data?.application?.id } }">Посмотреть заявку</router-link>
    </p>

    <p class="info" v-else>
      Уведомление по Вашей заявке <router-link :to="{ name: 'ViewApplication', params: { application_id: notification_data?.application?.id } }">№{{ notification_data?.application?.id }}</router-link>
    </p>

    <p class="comment" v-if="notification_data?.content">
      {{ notification_data.content }}
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