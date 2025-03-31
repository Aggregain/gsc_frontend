<template>
  <el-form-item :label="label" :prop="name">
    <div class="avatar-wrapper">
      <div class="avatar-preview" :class="{ withImage: modelValue }">
        <img v-if="modelValue" :src="previewUrl" alt="Аватар" />
        <Icon v-else icon="mage:user-fill" color="#8E9DAF" />
      </div>

      <el-upload
          class="upload-btn"
          :auto-upload="false"
          :show-file-list="false"
          :on-change="handleFileChange"
      >
        <el-button type="primary" link>
          <template v-if="modelValue">
            <EditIcon /> Изменить фото
          </template>
          <template v-else>
            <Icon icon="basil:plus-outline" /> Загрузить фото
          </template>
        </el-button>
      </el-upload>
    </div>
  </el-form-item>
</template>

<script>
import EditIcon from "@/components/icons/EditIcon";

export default {
  components:{
    EditIcon
  },
  props: {
    label: String,
    name: String,
    modelValue: [Object, String, null]
  },

  computed: {
    previewUrl() {
      if (this.modelValue instanceof File) {
        return URL.createObjectURL(this.modelValue);
      }
      return this.modelValue;
    }
  },

  methods: {
    handleFileChange(file) {
      this.$emit("update:modelValue", file.raw);
    }
  }
};
</script>
