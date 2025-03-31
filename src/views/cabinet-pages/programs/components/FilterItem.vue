<template>
  <el-card shadow="never" :class="{ opened }">
    <button type="button" class="toggleButton" @click="opened=!opened">
      {{ title }} <ArrowIcon :color="opened?'#1E62E8':'#202124'" />
    </button>
    <div class="toggleBlock">
      <DefaultCheckboxes
          v-model="computedValue"
          :name="name"
          :options="options"
      />
    </div>
  </el-card>
</template>

<script>
import ArrowIcon from "@/components/icons/ArrowIcon";
import DefaultCheckboxes from "@/components/form/DefaultCheckboxes";

export default {
  components: { ArrowIcon, DefaultCheckboxes },
  props: {
    title: String,
    modelValue: Array,
    name: String,
    options: Array
  },
  data:()=>({
    opened: false
  }),
  computed: {
    computedValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      }
    }
  },
  created() {
    if(this.name === 'example_type'){
      this.opened = true;
    }
  }
};
</script>
