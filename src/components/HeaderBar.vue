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
    <div class="username" v-if="account">
      {{
        account.substring(0, 8) +
          '...' +
          account.substring(account.length - 6, account.length)
      }}
    </div>
    <div class="connect" v-else @click="get">连接钱包</div>
  </div>
</template>

<script>
import { initWeb3Account } from '../abi/web3'
import { IsMobile } from '../util'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      IsMobile: IsMobile(),
      moblieMenu: false,
      account: ''
    }
  },
  mounted () {
    this.get()
    console.log(this.IsMobile)
  },
  methods: {
    ...mapMutations(['SET_ADDRESS']),
    get () {
      if (window.ethereum) {
        initWeb3Account((provider, web3, account) => {
          console.log(provider, web3, account)
          this.account = account
          this.SET_ADDRESS(account)
        })
        // window.ethereum.enable().then(res => {
        //   alert('当前钱包地址:' + res[0])
        //   let web3 = new Web3(window.web3.currentProvider)
        //   let fromAddress = web3.eth.accounts[0]
        //   web3.eth.getBalance(fromAddress, (err, res) => {
        //     if (!err) {
        //       console.log('ETH余额==', res.toNumber() / Math.pow(10, 18))
        //     }
        //   })
        // })
      } else {
        alert('请安装MetaMask钱包')
      }
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
  .active {
    color: #fff;
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
  }
}
</style>
