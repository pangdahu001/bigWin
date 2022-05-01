<template>
  <div class="header">
    <nav>
      <router-link active-class="active" to="/">Home</router-link>
      <router-link active-class="active" to="/application"
        >Application</router-link
      >
      <router-link active-class="active" to="/application">规则</router-link>
    </nav>
    <div class="lang">
      <span>中文</span>
      <span>English</span>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  color: #e5cec2;
  .active {
    color: #fff;
  }
}
</style>
