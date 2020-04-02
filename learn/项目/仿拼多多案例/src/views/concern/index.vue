<template>
  <div class="concern">
    <div class="attention">
      <div class="store">
        <div class="container-store" v-if="show">
          <van-icon name="shop-collect-o" size="50" />
          <p>暂无关注的店铺</p>
        </div>
      </div>
      <div class="recommend">
        <van-icon name="shop" />
        <span>推荐店铺</span>
      </div>
      <div class="store-list" v-for="(item,index) in 10" :key="index">
        <img
          src="https://t16img.yangkeduo.com/pdd_ims/65eefe71083ad600fca70c6f24f87f6a.png?imageMogr2/sharpen/50/strip%7CimageView2/2/w/1300/format/webp/q/80"
        />
        <div class="info">
          <div class="title">雪狐服饰店</div>
          <div class="current">
            已拼: 10万件
            <span>|</span> 关注: 7.8万人
          </div>
        </div>
        <div class="attention">
          <div class="symbel"></div>关注
        </div>
        <div class="exhibition">
          <div class="swiper-container" ref="show">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="container" v-for="(item,index) in info" :key="index">
                  <img :src="item.img" />
                  <span class="price">￥{{item.price}}</span>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="container" v-for="(item,index) in info" :key="index">
                  <img :src="item.img" />
                  <span class="price">￥{{item.price}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "concern",
  data() {
    return {
      show: true,
      info: [
        {
          img:
            "https://t00img.yangkeduo.com/goods/images/2018-10-28/7c909173a20bf1f97fbda23a17334898.jpeg?imageMogr2/sharpen/50/strip%7CimageView2/2/w/1300/format/webp/q/80",
          price: "57.8"
        },
        {
          img:
            "https://t00img.yangkeduo.com/goods/images/2018-10-28/7c909173a20bf1f97fbda23a17334898.jpeg?imageMogr2/sharpen/50/strip%7CimageView2/2/w/1300/format/webp/q/80",
          price: "57.8"
        },
        {
          img:
            "https://t00img.yangkeduo.com/goods/images/2018-10-28/7c909173a20bf1f97fbda23a17334898.jpeg?imageMogr2/sharpen/50/strip%7CimageView2/2/w/1300/format/webp/q/80",
          price: "57.8"
        },
        {
          img:
            "https://t00img.yangkeduo.com/goods/images/2018-10-28/7c909173a20bf1f97fbda23a17334898.jpeg?imageMogr2/sharpen/50/strip%7CimageView2/2/w/1300/format/webp/q/80",
          price: "57.8"
        }
      ]
    };
  },
  mounted() {
    const ele = this.$refs.show;
    var mySwiper = new Swiper(ele, {
      freeMode: true
    });
  }
};
</script>

<style lang="less" scoped>
.store {
  position: relative;
  width: 100%;
  height: 430px;
  background-color: #f4f4f4;
  .container-store {
    color: #555;
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    margin: auto;
    transform: translateY(-50%);
    p {
      font-size: 30px;
      margin: 5px 0 0 0;
    }
  }
}
.recommend {
  color: #e02e24;
  text-align: center;
  font-size: 35px;
  margin-top: 40px;
  margin-bottom: 10px;
  i,
  span {
    vertical-align: middle;
  }
  i {
    margin: 0 8px;
  }
}
.store-list {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  img {
    width: 80px;
    height: 80px;
    display: block;
    border: 1px solid #555;
  }
  .info {
    width: 430px;
    .title {
      position: relative;
      font-size: 30px;
      &:after {
        content: "";
        position: absolute;
        width: 18px;
        height: 18px;
        border-top: 1px solid #000;
        border-left: 1px solid #000;
        transform: translateY(15px) translateX(10px) rotate(135deg);
        border-color: #adadad;
      }
    }
    .current {
      color: #adadad;
      font-size: 20px;
      span {
        margin: 0 10px;
      }
    }
  }
  .attention {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 155px;
    height: 56px;
    border: 1px solid red;
    border-radius: 5px;
    color: #f00;
    font-size: 26px;
    .symbel {
      width: 30px;
      height: 30px;
      margin-right: 10px;
      background-image: url(https://pinduoduoimg.yangkeduo.com/like/v2/shop_collection_rec_button.png);
      background-size: cover;
      // background-position: center;
    }
  }
  .exhibition {
    width: 100%;
    height: 200px;
    margin-top: 5px;
    // background-color: red;;
    .swiper-slide {
      display: flex;
      justify-content: space-between;
      .container {
        position: relative;
        img {
          width: 180px;
          height: 200px;
        }
        .price {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          background-color: rgba(0, 0, 0, 0.5);
          border-radius: 10px;
          color: #fff;
          font-size: 22px;
        }
      }
    }
  }
}
</style>