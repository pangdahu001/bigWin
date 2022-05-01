<template>
  <div class="application">
    <div class="app1">
      <div class="left">
        <div class="item" v-for="i in 6" :key="i">
          <div class="title">invitation code</div>
          <div class="num">1</div>
        </div>
      </div>
      <div class="right">
        <div class="title">ALL Wagers</div>
        <div class="token">0 ETH</div>
        <div class="bet">
          0bets
        </div>
        <div class="btns">
          <div class="btn" v-for="i in 4" :key="i">{{ i }}</div>
        </div>
        <div class="input">
          <input type="text" />
          <p>your amout</p>
        </div>
        <div class="datemine">
          datemine
        </div>
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
  </div>
</template>

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
        height: 250px;
        box-sizing: border-box;
        padding: 30px;
        text-align: center;
        background: #ccc;
        margin-bottom: 20px;
      }
    }
    .right {
      flex: 1;
      text-align: center;
      font-size: 20px;
      color: #e5d7c2;
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
        margin: 55px auto 86px;
        .btn {
          width: 110px;
          height: 46px;
          background: rgba(229, 206, 194, 0.48);
          border-radius: 6px;
          line-height: 46px;
        }
      }
      .input {
        input {
          border: 1px solid #e5d7c2;
          border-radius: 6px;
          width: 269px;
          height: 55px;
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
        margin: 60px auto 0;
      }
    }
  }
  .app2 {
    height: 444px;
    background: rgba(122, 110, 98, 0.48);
    border-radius: 20px;
    padding: 0 40px;
    overflow: hidden;
    .title {
      margin-top: 20px;
      height: 70px;
      line-height: 70px;
      font-size: 26px;
      color: #fceace;
      text-align: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.36);
    }
    .info {
      margin-top: 30px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      .info-item {
        .name {
          font-size: 22px;
        }
        .val {
          margin-top: 30px;
          font-size: 18px;
        }
      }
    }
  }
}
</style>
