<template>
  <el-card shadow="never" v-if="filterOptions?.prices?.min && filterOptions?.prices?.max" :class="{ opened }">
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
                @change="onPriceChange"
                :min="filterOptions.prices.min"
                :max="priceRange[1]"
            />
          </el-form-item>
          <div class="line"></div>
          <el-form-item label="до">
            <el-input-number
                :disabled="isLoading"
                :controls="false"
                v-model="priceRange[1]"
                @change="onPriceChange"
                :min="priceRange[0]"
                :max="filterOptions.prices.max"
            />
          </el-form-item>
        </div>

        <el-slider
            :disabled="isLoading"
            v-model="priceRange"
            @change="onPriceChange"
            range
            :min="filterOptions.prices.min"
            :max="filterOptions.prices.max"
            :format-tooltip="formatTooltip"
        />
      </div>
    </div>
  </el-card>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";
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
    ...mapMutations("ProgramModule", ["SET_PRICES_FILTER"]),

    onPriceChange() {
      const [min, max] = this.priceRange;
      this.SET_PRICES_FILTER({ price_min: min, price_max: max });
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
    'filterOptions.prices': {
      handler({ min, max } = {}) {
        if (min == null || max == null) return;

        if (!this.initialSet) {
          this.priceRange = [min, max];
          this.initialSet = true;
          return;
        }

        const [from, to] = this.priceRange;
        const newFrom = Math.min(Math.max(from, min), max);
        const newTo = Math.min(Math.max(to, newFrom), max);

        this.priceRange = [newFrom, newTo];
      },
      immediate: true,
      deep: true,
    }
  }
};
</script>
