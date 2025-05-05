<template>
  <el-form-item label="Фото">
    <div class="avatar-wrapper">
      <div class="avatar-preview" :class="{ withImage: avatarUrl }">
        <img v-if="avatarUrl" :src="avatarUrl" alt="Аватар" />
        <Icon v-else icon="mage:user-fill" color="#8E9DAF" />
      </div>

      <el-upload
          class="upload-btn"
          :auto-upload="false"
          :show-file-list="false"
          :on-change="handleFileChange"
          accept="image/jpeg,image/png"
      >
      <el-button type="primary" link>
          <template v-if="avatarUrl">
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
import { mapGetters, mapActions } from "vuex";
import fileValidatorMixin from "@/mixins/fileValidatorMixin";
import EditIcon from "@/components/icons/EditIcon";

export default {
  mixins: [fileValidatorMixin],
  components: {
    EditIcon
  },

  computed: {
    ...mapGetters("UserModule", ["profileInfo", "isLoading"]),
    avatarUrl() {
      return this.profileInfo?.avatar || null;
    }
  },

  methods: {
    ...mapActions("UserModule", ["UPLOAD_USER_AVATAR"]),

    handleFileChange(file) {
      const avatarFile = file.raw;
      if (!this.validateAvatar(avatarFile)) return;

      const formData = new FormData();
      formData.append("avatar", avatarFile);

      this.UPLOAD_USER_AVATAR(formData);
    }
  }


};
</script>
