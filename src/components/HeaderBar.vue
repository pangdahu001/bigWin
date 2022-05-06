<template>
  <div class="header">
    <div
      class="bg"
      :class="[IsMobile && 'hidden', moblieMenu && 'moblieMenu']"
      @click="hiddenMenu"
    >
      <nav>
        <router-link active-class="active" to="/">首页</router-link>
        <router-link active-class="active" to="/application">应用</router-link>
        <router-link active-class="active" to="/application">规则</router-link>
      </nav>
    </div>

    <div v-if="IsMobile" class="moblie-menu" @click="showMenu">
      <i class="el-icon-s-fold"></i>
    </div>
    <div class="lang">
      <span>中文</span>
      <span>English</span>
    </div>
    <WalletConnect />
    <!-- <div class="username" v-if="account">
      {{
        account.substring(0, 8) +
          '...' +
          account.substring(account.length - 6, account.length)
      }}
    </div>
    <div class="connect" v-else @click="get">连接钱包</div> -->
  </div>
</template>

<script>
// import { initWeb3Account } from '../abi/web3'
import { IsMobile } from '../util'
import { mapMutations } from 'vuex'
import WalletConnect from '@/components/WalletConnect.vue'

export default {
  data () {
    return {
      IsMobile: IsMobile(),
      moblieMenu: false,
      account: ''
    }
  },
  components: { WalletConnect },
  mounted () {
    // this.get()
  },
  methods: {
    ...mapMutations(['SET_ADDRESS']),
    get () {
      // initWeb3Account((provider, web3, account) => {
      //   console.log(provider, web3, account)
      //   this.account = account
      //   this.SET_ADDRESS(account)
      // })
    },
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
  nav {
    a {
      text-decoration: none;
      .active {
        color: #ccc;
      }
    }
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
