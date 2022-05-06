<template>
  <div class="home">
    <div class="part1">
      <h1>文案基于什么 的文案基于什么 的</h1>
      <p>文案的内容此处一万字文案的内容此处一万字文案的内容此处一万字</p>
      <div class="btn-group">
        <div class="btn-1">累计投入总量</div>
        <div class="btn-1">累计参与人数</div>
      </div>
    </div>
    <div class="part2">
      <div class="title">应用两点</div>
      <div class="content">
        <ul>
          <li>
            <img src="@/assets/1.png" alt="" srcset="" />
          </li>
          <li><img src="@/assets/2.png" alt="" srcset="" /></li>
          <li><img src="@/assets/3.png" alt="" srcset="" /></li>
        </ul>

        <div class="safe">安全</div>
      </div>
    </div>
    <div class="part3"></div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  .part1 {
    width: 100%;
    // padding: 0 10%;
    margin: 0 auto;
    background: url('~@/assets/plat.png') no-repeat center bottom;
    height: 400px;
    h1 {
      text-align: center;
      font-size: 28px;
    }
    p {
      text-align: center;
      font-size: 16px;
    }
    .btn-group {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 672px;
      margin: 0 auto;
      > div {
        font-size: 20px;
        color: #e5cec2;
        line-height: 1;
        text-align: center;
        padding: 15px 30px;
        height: 52px;
        box-sizing: border-box;
        border: 1px solid #a7a7a7;
        border-radius: 4px;
      }
    }
  }
  .part2 {
    margin-top: -20px;
    .title {
      font-size: 20px;
    }
    .content {
      ul {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding: 0;
        li {
          width: 301px;
          height: 353px;
          // background: #ccc;
          list-style: none;
          font-size: 20px;
        }
      }
    }
    .safe {
      text-align: center;
    }
  }
  .part3 {
    height: 300px;
    background: #ccc;
  }
}
@media screen and (max-width: 750px) {
  .home .part1 .btn-group > div {
    font-size: 16px;
    padding: 15px;
  }
}
</style>
