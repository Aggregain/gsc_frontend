<template>
  <el-card shadow="never" v-if="filterOptions?.min_price" :class="{ opened }">
    <button type="button" class="toggleButton" @click="opened=!opened">
      {{ title }} <ArrowIcon :color="opened?'#1E62E8':'#202124'" />
    </button>
    <div class="toggleBlock">
      <div class="rangeSelectorBlock">
        <div class="inputsBlock">
          <el-form-item label="от">
            <el-input-number
                :disabled="isLoading"
                :controls="false"
                v-model="priceRange[0]"
                :min="filterOptions.min_price"
                :max="filterOptions.max_price"
            />
          </el-form-item>
          <div class="line"></div>
          <el-form-item label="до">
            <el-input-number
                :disabled="isLoading"
                :controls="false"
                v-model="priceRange[1]"
                :min="filterOptions.min_price"
                :max="filterOptions.max_price"
            />
          </el-form-item>
        </div>

        <el-slider
            :disabled="isLoading"
            v-model="priceRange"
            range
            :min="filterOptions.min_price"
            :max="filterOptions.max_price"
            :format-tooltip="formatTooltip"
        />
      </div>
    </div>
  </el-card>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import ArrowIcon from "@/components/icons/ArrowIcon";

export default {
  components: { ArrowIcon },
  props: {
    title: String,
  },
  data:()=>({
    opened: false,
    priceRange: [],
    initialSet: false,
  }),
  methods: {
    ...mapActions("ProgramModule", ["GET_PROGRAMS"]),

    priceChanged() {
      this.GET_PROGRAMS();
    },
    formatTooltip(val) {
      return val.toLocaleString() + ' ₸'
    }
  },
  computed: {
    ...mapGetters("ProgramModule", ["filterForm", "filterOptions", "isLoading"])
  },
  watch: {
    filterOptions: {
      handler({ min_price, max_price } = {}) {
        if (min_price == null || max_price == null) return;

        if (!this.initialSet) {
          this.priceRange = [min_price, max_price];
          this.initialSet = true;
          return;
        }

        const [from, to] = this.priceRange;
        const newFrom = Math.min(Math.max(from, min_price), max_price);
        const newTo = Math.min(Math.max(to, newFrom), max_price);

        this.priceRange = [newFrom, newTo];
      },
      immediate: true,
      deep: true,
    }
  }
};
</script>
