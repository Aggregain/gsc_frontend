<template>
    <div class="default-container notFoundPage">
      <el-row :gutter="30" align="middle">
        <el-col :xs="{span: 24}" :span="12" :sm="{offset: 6}" class="text-center">
          <p class="notFoundText">404</p>
          <h1>Страница не найдена</h1>
          <el-button type="primary" class="fullSize bigFS" @click="goHome">На главную</el-button>
        </el-col>
      </el-row>
    </div>
</template>

<script>

export default {
  methods: {
    async goHome() {
      window.location.href = "/";
    }
  }
}
</script>
