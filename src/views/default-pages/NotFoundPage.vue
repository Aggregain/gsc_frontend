<template>
  <div>
    <el-container class="notFoundPage">
      <el-row :gutter="30" align="middle">
        <el-col :span="24">
          <h1>Страница не найдена((</h1>
          <p class="descr">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias, atque c
          </p>
          <el-button type="primary" @click="goHome">Вернуться на главную</el-button>
        </el-col>
      </el-row>
    </el-container>
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
