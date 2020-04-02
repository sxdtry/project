<template>
  <div class="s-body">
    <h3>去哪儿推荐</h3>
    <van-row class="price" v-for="item in price[num]" :key="item.id">
      <van-col class="left" span="18">
        <p>{{item.name}}</p>
        <p>{{item.time}}前可订明日</p>
        <van-tag plain type="primary">自营</van-tag>
        <van-tag plain type="primary">条件退</van-tag>
      </van-col>
      <van-col class="right" span="6">
        <span class="right-price">￥{{item.price}}</span>
        <van-button
          type="primary"
          color="linear-gradient(130deg,#ffab1e 37%,#ff8c12 100%)"
          size="small"
        >主要按钮</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: "s-body",
  props:["num"],
  data() {
    return {
      price: [
        [
          {
            id: 0,
            name: "【芜湖市民专享】马仁奇峰成人票（3月特惠）",
            time: "23:59",
            price: "38"
          },
          {
            id: 1,
            name: "【官方直销】马仁奇峰套票（大门票+玻璃桥+玻璃栈道）",
            time: "23:59",
            price: "145"
          },
          {
            id: 2,
            name: "【官方直销】马仁奇峰成人票",
            time: "23:59",
            price: "85.0"
          }
        ],
        [
          {
            id: 0,
            name: "芜湖新华联大白鲸海洋公园门票抵用券成人票(预售)",
            time: "17:30",
            price: "9.9"
          }
        ]
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.s-body {
  background-color: #fff;
  h3 {
    font-weight: 100;
    margin: 0;
    padding: 10px 0;
    font-size: 20px;
  }
  .price {
    border-top: 1px solid #9e9e9e;

    padding: 10px 0;
    .left {
      &:first-child {
        //   width: 240px;
        font-size: 16px;
      }
      p:nth-child(2) {
        font-size: 12px;
        padding: 5px 0;
      }
    }
    .right {
      text-align: center;
      height: 100%;
      .right-price {
        font-size: 20px;
        color: #f60;
      }
      button {
        width: 80px;
        height: 30px;
      }
    }
  }
}
</style>