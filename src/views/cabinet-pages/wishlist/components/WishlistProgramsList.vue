<template>
  <el-row :gutter="24" class="wishlistList">
    <template v-if="wishlistData.length > 0">
      <el-col :span="8" v-for="item in wishlistData" v-bind:key="item">
        <el-card class="programCard" shadow="never">
          <div class="head">
            <img src="@/assets/img/program-logo.png" alt="">
            <p class="title">
              {{ item.name }}
              <span>США, Юта</span>
            </p>
            <el-button type="info" class="onlyIcon mini"><HeartIcon :color="'#D81B60'" :fill="'#D81B60'" /></el-button>
          </div>
          <div class="body">
            <p><span class="label">Язык обучения:</span> <span>Английский</span></p>
            <p><span class="label">Срок обучения:</span> <span>4 года</span></p>
            <p><span class="label">Сумма в год:</span> <span>$33 000</span></p>
            <p><span class="label">Дедлайн подачи:</span> <span>01.08.2025</span></p>
          </div>
        </el-card>
      </el-col>
    </template>
  </el-row>
</template>

<script>
import {mapGetters} from "vuex";
import HeartIcon from "@/components/icons/HeartIcon";

export default {
  components: {
    HeartIcon
  },
  computed: {
    ...mapGetters("WishlistModule", ["wishlistData"])
  }
};
</script>