<template>
  <el-row :gutter="24" class="programsList">
    <template v-if="programsList?.length>0">
      <el-col :span="8" v-for="item in programsList" v-bind:key="item">
        <el-card class="programCard" shadow="never" @click="goToUniversity(item.education_place.id)">
          <div class="head">
            <div class="logoBlock">
              <img v-if="item?.education_place?.logo" :src="item.education_place.logo" alt="">
            </div>
            <p class="title">
              {{ (n => n.length > 32 ? n.slice(0, 32) + '...' : n)(item.education_place.name) }}
              <span>{{ item?.education_place?.country_name }}, {{ item?.education_place?.city_name }}</span>
            </p>
          </div>
          <div class="body">
            <p><span class="label">Программа:</span> <span>{{ getNameFromDictionary('degrees', item.name) }}</span></p>
            <p><span class="label">Срок обучения:</span> <span>{{ item.duration_years }} года</span></p>
            <p><span class="label">Сумма в год:</span> <span>{{ $formatPrice(item.price) }}</span></p>
            <p><span class="label">Дедлайн подачи:</span> <span>{{ $formatDate(item.admission_deadline) }}</span></p>
          </div>
        </el-card>
      </el-col>
    </template>
    <template v-else>
      <el-col :span="24">
        <div class="defaultEmptyBlock">
          <el-card shadow="never">
            <img src="@/assets/img/empty-docs.png" alt="" />
            <p class="custom-empty-text">Ничего не найдено</p>
          </el-card>
        </div>
      </el-col>
    </template>
  </el-row>
</template>

<script>
import dictionaryMixin from "@/mixins/dictionaryMixin";
import {mapGetters} from "vuex";

export default {
  mixins: [dictionaryMixin],
  computed: {
    ...mapGetters("ProgramModule", ["programsList"])
  },
  methods: {
    goToUniversity(id) {
      this.$router.push({ name: "University", params:{ university_id: id } });
    }
  }
};
</script>