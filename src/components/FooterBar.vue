<template>
  <div class="footer">
    <nav>
      <router-link v-for="i in 4" to="/" :key="i">github</router-link>
    </nav>
    <div class="menu">
      <router-link v-for="i in 7" to="/" :key="i">首页</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menu: [
        {
          name: '首页',
          link: ''
        },
        { name: '应用', link: '' },
        { name: '应用', link: '' },
        { name: '应用', link: '' },
        { name: '应用', link: '' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  font-size: 20px;
  color: #e5cec2;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 436px;
  box-sizing: border-box;
  padding-top: 116px;
  nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .menu {
    margin-top: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
</style>
