<template>
  <div class="header">
    <div
      class="bg"
      :class="[IsMobile && 'hidden', moblieMenu && 'moblieMenu']"
      @click="hiddenMenu"
    >
      <nav>
        <router-link to="/">首页</router-link>
        <router-link to="/application">应用</router-link>
        <!-- <router-link to="/application">规则</router-link> -->
      </nav>
    </div>

    <div v-if="IsMobile" class="moblie-menu" @click="showMenu">
      <i class="el-icon-s-fold"></i>
    </div>
    <div class="langContainer">
      <div class="lang">
        <el-select v-model="lang" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.name"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <WalletConnect />
    </div>
  </div>
</template>

<script>
import { IsMobile } from '../util'
import WalletConnect from '@/components/WalletConnect.vue'

export default {
  data () {
    return {
      IsMobile: IsMobile(),
      moblieMenu: false,
      account: '',
      lang: '',
      options: [
        {
          name: '中文',
          value: 'zh'
        },
        { name: 'English', value: 'en' }
      ]
    }
  },
  components: { WalletConnect },
  mounted () {},
  methods: {
    showMenu () {
      this.moblieMenu = !this.moblieMenu
    },
    hiddenMenu (e) {
      if (e.target.nodeName == 'DIV') {
        this.moblieMenu = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  color: #e5cec2;
  padding: 20px;
  position: relative;
  z-index: 3;
  nav {
    a {
      text-decoration: none;
      color: rgb(229 206 194 / 40%);
      margin-right: 20px;
      &.router-link-exact-active {
        color: #e5cec2;
      }
    }
  }
}
.langContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  ::v-deep.el-select .el-input__inner {
    background: transparent;
    border-color: #e5cec2;
  }
  .lang {
    margin-right: 10px;
  }
}
.hidden {
  transition: all 1s ease;
  position: fixed;
  left: -200px;
  top: 0;
  height: 100%;
  width: 0;
  > nav {
    width: 200px;
    height: 100%;
    background: #fff;
    padding: 0;
  }
}
.moblieMenu {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgb(43 39 39 / 58%);
  display: block;
  > nav {
    width: 200px;
    height: 100%;
    background: #fff;
    padding: 30px;
    display: flex;
    flex-direction: column;
    a {
      color: #000;
    }
  }
}
</style>
