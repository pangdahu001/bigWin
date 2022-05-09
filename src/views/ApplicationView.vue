<template>
  <div class="application">
    <template v-if="isConnected">
      <div class="app1">
        <div class="left">
          <div class="item" v-for="(item, i) in infoList" :key="i">
            <div class="title">{{ item.name }}</div>
            <div class="num">{{ item.value }}</div>
          </div>
        </div>
        <div class="right">
          <div class="bigv"></div>
          <div class="zindex3">
            <div class="title">ALL Wagers</div>
            <div class="token">0 ETH</div>
            <div class="bet">
              0bets
            </div>
            <div class="btns">
              <div
                class="btn"
                v-for="i in 4"
                :key="i"
                @click="depositValue = i"
              >
                {{ i }}USDT
              </div>
            </div>
            <div class="input">
              <input type="text" :max="getBalance" v-model="depositValue" />
              <p>your amout：{{ getBalance }}</p>
            </div>
            <div
              v-if="allowanceVal && !allowanceVal.toNumber()"
              class="datemine"
              @click="approveFc"
            >
              datemine
            </div>
            <div v-else class="datemine" @click="depositFc">
              deposit
            </div>
          </div>
          <!-- <span>{{ allowance.toNumber() }}</span> -->
        </div>
      </div>
      <div class="app2">
        <div class="title">Settement record</div>
        <div class="info">
          <div class="info-item">
            <div class="name">Time</div>
            <div class="val">2022 / 04 /22</div>
          </div>
        </div>
      </div>
      <div class="app2 app3">
        <div class="title">
          <span>Total revenue</span>
          <span>Capital</span>
        </div>
        <div class="info">
          <div class="info-item">
            <div class="info-item-title">总收入</div>
            <div class="name">
              <img src="@/assets/usdt.png" alt="" />
              {{ getUserInfo[1] && getUserInfo[1].toNumber() }}
            </div>
            <div class="val">财富自由</div>
          </div>
          <div class="info-item">
            <div class="info-item-title">资本</div>
            <div class="name">
              <img src="@/assets/usdt.png" alt="" />
              {{ getUserInfo[2] && getUserInfo[2].toNumber() }}
            </div>
            <div class="val">小额投资</div>
          </div>

          <div class="info-item">
            <div class="info-item-title">分红总额</div>
            <div class="name">
              <img src="@/assets/usdt.png" alt="" />
              {{ getUserInfo[7] && getUserInfo[7].toNumber() }}
            </div>
            <div class="val">不断积累</div>
          </div>

          <div class="info-item">
            <div class="info-item-title">奖励总额</div>
            <div class="name">
              <img src="@/assets/usdt.png" alt="" />
              {{ getUserInfo[5] && getUserInfo[5].toNumber() }}
            </div>
            <div class="val">分享的力量</div>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <p class="tips">请先连接钱包</p>
    </template>
  </div>
</template>

<script>
// import { approve, deposit } from '../abi/send'
import { mapGetters } from 'vuex'
import { BigNumber } from 'bignumber.js'

export default {
  data () {
    return {
      allowance: new BigNumber(0),
      Balance: '',
      depositValue: 0
    }
  },
  computed: {
    ...mapGetters([
      'getBalance',
      'isConnected',
      'allowanceVal',
      'bigWinContract',
      'getNodeNumber',
      'getNodeLevel',
      'getBeCode',
      'getInviteCode',
      'getUserInfo'
    ]),
    infoList () {
      let infoList = [
        { name: 'Invitation code', value: this.getInviteCode },
        { name: 'Node number', value: this.getNodeNumber },
        {
          name: 'Level of share out bonus',
          value: this.getUserInfo[10]?.toNumber()
        },
        { name: 'Node level', value: this.getNodeLevel },
        { name: 'In toal', value: '' },
        { name: 'The wallet balance', value: this.getBalance }
      ]
      return infoList
    }
  },
  mounted () {},
  watch: {
    isConnected (newVal) {
      if (newVal) {
        this.$store.dispatch('getBalance')
        this.$store.dispatch('getAllowance')
        this.$store.dispatch('getRound')
        this.$store.dispatch('getNodeNumber')
      }
      console.log(newVal)
    }
  },
  methods: {
    approveFc () {
      this.$store.dispatch('approve')
    },
    depositFc () {
      if (!this.depositValue) {
        return
      }
      this.$store.dispatch('deposit', this.depositValue)
    }
  }
}
</script>

<style lang="scss" scoped>
.application {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  .app1 {
    display: flex;
    justify-content: space-between;
    .left {
      width: 500px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .item {
        width: 240px;
        height: 184px;
        box-sizing: border-box;
        padding: 30px;
        text-align: center;
        background: #ccc;
        margin-bottom: 20px;
        background: url('~@/assets/item.png') no-repeat center;
        .title {
          font-size: 20px;
          color: #98623d;
          margin-top: 10px;
        }
        .num {
          font-size: 24px;
          color: #97623d;
          margin-top: 30px;
        }
      }
    }
    .right {
      flex: 1;
      text-align: center;
      font-size: 20px;
      color: #e5d7c2;
      position: relative;

      .bigv {
        position: absolute;
        top: -154px;
        right: 0;
        width: 642px;
        height: 707px;
        background: url('~@/assets/bigV.png');
        z-index: 0;
      }
      .zindex3 {
        z-index: 1;
        position: relative;
      }
      .title {
      }
      .token {
        font-size: 30px;
        margin: 40px auto 32px;
      }
      .btns {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 515px;
        margin: 55px auto 147px;
        .btn {
          width: 110px;
          height: 46px;
          background: rgba(229, 206, 194, 0.48);
          border-radius: 6px;
          line-height: 46px;
          cursor: pointer;
        }
      }
      .input {
        input {
          border: 2px solid #fff;
          border-radius: 6px;
          width: 269px;
          height: 55px;
          background: transparent;
          color: #fff;
          font-size: 22px;
        }
      }
      .datemine {
        width: 439px;
        height: 59px;
        background: linear-gradient(-45deg, #fceace, #e3af81);
        border-radius: 15px;
        line-height: 59px;
        color: #494949;
        font-size: 26px;
        margin: 30px auto 0;
        cursor: pointer;
      }
    }
  }
  .app2 {
    height: 444px;
    background: rgba(122, 110, 98, 0.48);
    border-radius: 20px;
    padding: 0 40px;
    overflow: hidden;
    margin-top: 50px;
    .title {
      margin-top: 20px;
      height: 70px;
      line-height: 70px;
      font-size: 26px;
      color: #fceace;
      text-align: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.36);
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    .info {
      margin-top: 30px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      .info-item {
        flex: 1;
        .info-item-title {
          font-size: 22px;
          margin-bottom: 30px;
        }
        .name {
          font-size: 22px;
          img {
            vertical-align: middle;
          }
        }
        .val {
          margin-top: 30px;
          font-size: 18px;
        }
      }
    }
  }
}
.tips {
  text-align: center;
}
@media screen and (max-width: 750px) {
  .application {
    .app1 {
      flex-direction: column;
      .left {
        width: 95%;
        margin: 0 auto;
        .item {
          width: 48%;
          height: 33vw;
          background: linear-gradient(-30deg, #f4d9bb, #b2845c);
          border-radius: 20px;
          padding: 15px 0;
          .num {
            margin-top: 15px;
          }
        }
      }
      .right {
        background: #ffe5cc;
        border-radius: 20px;
        padding: 30px 0;
        color: #97623d;
        .bigv {
          display: none;
        }
        .token {
          margin: 20px 0;
        }
        .btns {
          flex-wrap: nowrap;
          width: 90%;
          margin: 20px auto 30px;
          .btn {
            width: 76px;
            background: linear-gradient(90deg, #7b4d24, #552f0e);
            border-radius: 6px;
            color: #ffe5cc;
          }
        }
        .input {
          input {
            border: 1px solid #7a4c23;
            border-radius: 6px;
            color: #7a4c23;
          }
        }
        .datemine {
          width: 90%;
          background: linear-gradient(-45deg, #a46832, #e3af81);
          border-radius: 15px;
          color: #fceace;
        }
      }
    }
    .app2 {
      margin: 20px 2.5% 0;
      padding: 0 5%;
      .title {
        font-size: 16px;
      }
      .info .info-item {
        .info-item-title {
          font-size: 16px;
        }
        .name {
          font-size: 16px;
        }
        .val {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
