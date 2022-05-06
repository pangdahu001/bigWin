<template>
  <div id="app">
    <Header></Header>
    <router-view />
    <FooterBar />
  </div>
</template>
<script>
import Header from '@/components/HeaderBar.vue'
import FooterBar from '@/components/FooterBar.vue'
export default {
  name: 'app',
  components: {
    Header,
    FooterBar
  }
}
</script>
<style lang="scss">
html,
body {
  background: #000000;
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #e5cec2;
}

nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
