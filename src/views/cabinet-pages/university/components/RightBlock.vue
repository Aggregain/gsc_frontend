<template>
  <el-card class="stickyRightBlock" shadow="never">
    <div class="headLabel">
      <div class="defaultIcon danger"><Icon icon="mingcute:wallet-4-fill"></Icon></div>
      <p>
        Сумма в год:
        <span class="blue">от {{ $formatPrice(foundProgram?.price) }}</span>
      </p>
    </div>
    <hr class="mini">
    <div class="headLabel">
      <div class="defaultIcon danger"><Icon icon="mingcute:certificate-fill"></Icon></div>
      <p>
        Требование:
        <template v-if="foundProgram?.academic_requirements?.length>0">
          <span v-for="item in foundProgram.academic_requirements" v-bind:key="item.id">
            {{ item?.name }} {{ item?.treshold }}
          </span>
        </template>
        <span v-else>-</span>
      </p>
    </div>
    <hr class="mini">
    <div class="headLabel">
      <div class="defaultIcon danger"><Icon icon="solar:calendar-bold"></Icon></div>
      <p>
        Дедлайн подачи:
        <span>{{ $formatDate(foundProgram?.admission_deadline) }}</span>
      </p>
    </div>
    <hr class="mini">
    <el-button v-if="universityInfo.id" :loading="isLoading" @click="createApplication" type="primary" class="medium fullSize">Подать заявку</el-button>
  </el-card>
</template>

<script>
import {mapGetters} from "vuex";
import createApplicationMixin from "@/mixins/createApplicationMixin";

export default {
  mixins: [createApplicationMixin],
  computed:{
    ...mapGetters("UniversityModule", ["universityInfo"]),
    ...mapGetters("ApplicationModule", ["isLoading"]),

    foundProgram() {
      const programs = this.universityInfo?.programs || [];
      if (!programs.length) return null;

      const bachelorProgram = programs.find(p => p.name === "BACHELOR");
      if (bachelorProgram) return bachelorProgram;

      return programs.reduce((min, curr) =>
          curr.price < min.price ? curr : min
      );
    }

  },
}
</script>