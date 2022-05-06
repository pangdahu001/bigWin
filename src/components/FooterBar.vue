<template>
  <div class="footer">
    <nav>
      <router-link v-for="i in 4" to="/" :key="i"></router-link>
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
  background: #494949;
  font-size: 20px;
  color: #e5cec2;
  width: 100%;
  // max-width: 1200px;
  margin: 60px auto 0;
  height: 436px;
  box-sizing: border-box;
  padding-top: 116px;
  nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 400px;
    margin: 0 auto;
    a {
      width: 48px;
      height: 48px;
      background: linear-gradient(90deg, #ffe5cc, #bf8f64);
      border-radius: 50%;
      font-size: 12px;
    }
  }
  .menu {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 800px;
    margin: 80px auto 50px;
    a {
      font-size: 20px;
      color: rgb(229 206 194 / 40%);
      text-decoration: none;
    }
  }
}
</style>
