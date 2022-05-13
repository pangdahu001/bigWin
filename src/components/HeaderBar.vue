<template>
  <div class="header">
    <div
      class="bg"
      :class="[IsMobile && 'hidden', moblieMenu && 'moblieMenu']"
      @click="hiddenMenu"
    >
      <nav>
        <div class="logo">
          <img v-if="IsMobile" src="@/assets/logo-black.png" alt="" />
          <img v-else src="@/assets/logo.png" alt="" />
        </div>
        <router-link to="/">首页</router-link>
        <router-link to="/application">应用</router-link>
        <!-- <router-link to="/application">规则</router-link> -->
      </nav>
    </div>

    <div v-if="IsMobile" class="moblie-menu" @click="showMenu">
      <i class="el-icon-s-fold"></i>
    </div>
    <div class="langContainer">
      <div
        class="share"
        v-if="getInviteCode && $route.name == 'application'"
        @click="onCopy()"
      >
        <i class="el-icon-share"></i>
        邀请链接
      </div>
      <div class="lang">
        <el-select v-model="lang" placeholder="语言">
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
import { mapGetters } from 'vuex'

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
  computed: {
    ...mapGetters(['getInviteCode'])
  },
  methods: {
    showMenu () {
      this.moblieMenu = !this.moblieMenu
    },
    hiddenMenu (e) {
      if (e.target.nodeName == 'DIV') {
        this.moblieMenu = false
      }
    },
    onCopy () {
      this.$copyText(window.location.origin + '/?code=' + this.getInviteCode)
        .then(() => {
          this.$message.success({ message: '邀请链接复制到剪切板' })
        })
        .catch(() => {
          this.$message.error({ message: '邀请链接复制失败' })
        })
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
  .logo {
    width: 50px;
    display: inline-block;
    margin-right: 20px;
    > img {
      display: block;
      width: 100%;
    }
  }
  nav {
    line-height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
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
    width: 100px;
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
  z-index: 5;
  > nav {
    width: 200px;
    height: 100%;
    background: #fff;
    padding: 30px;
    display: flex;
    flex-direction: column;
    border-radius: 0 80px 80px 0;
    box-sizing: border-box;
    a {
      color: #000;
    }
  }
}
.share {
  i {
    font-size: 33px;
    // margin-right: 10px;
  }
  margin-right: 10px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
}
@media screen and (max-width: 750px) {
  .header {
    padding: 20px 2%;
    width: calc(100% - 4%);
    .langContainer {
      ::v-deep.el-select .el-input__inner {
        font-size: 12px;
        padding: 6px;
      }

      .lang {
        width: 70px;
      }
    }
    .moblie-menu {
      i {
        font-size: 33px;
      }
    }
  }
  .share {
    width: 70px;
  }
}
</style>
