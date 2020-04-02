<template>
  <div class="hot">
    <div class="swipe">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, index) in images" :key="index" @click="handlePreview(index)">
          <img v-lazy="item" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <div class="swiper-container" ref="swiperContainer">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <van-grid :column-num="5" :clickable="true" icon-size="32">
            <van-grid-item v-for="item in grid" :key="item.id" :icon="item.icon" :text="item.text" />
          </van-grid>
        </div>
        <div class="swiper-slide"> 
          <van-grid :column-num="5" :clickable="true" icon-size="32">
            <van-grid-item v-for="item in grid" :key="item.id" :icon="item.icon" :text="item.text" />
          </van-grid>
        </div>
      </div>
      <div class="swiper-scrollbar"></div>
    </div>

    <div class="card">
      <van-card
        v-for="(item,index) in card"
        :key="index"
        :num="item.num"
        :price="item.price"
        :title="item.title"
        :thumb="item.thumb"
        :lazy-load="true"
      />
    </div>
  </div>
</template>

<script>
import { ImagePreview } from "vant";
export default {
  data() {
    return {
      images: [
        "https://t16img.yangkeduo.com/pdd_oms/2020-01-20/d576d079cc49073a341aaeffda9dc867.jpg?imageMogr2/sharpen/50/strip%7CimageView2/2/w/750/q/80/format/webp",
        "https://t14img.yangkeduo.com/images/2019-12-20/112616ef98c3edda9a42e98d78ad5feb.jpg?imageMogr2/sharpen/50/strip%7CimageView2/2/w/750/q/80/format/webp",
        "https://t16img.yangkeduo.com/img_check/2019-12-09/dbcfb1ad0e0c4e5411f6228e46a7c0e0.jpg?imageMogr2/sharpen/50/strip%7CimageView2/2/w/750/q/80/format/webp",
        "https://t16img.yangkeduo.com/img_check/2019-12-28/1792a3ef292c90b08dbc3a287b85b39f.jpg?imageMogr2/sharpen/50/strip%7CimageView2/2/w/750/q/80/format/webp"
      ],
      grid: [
        {
          id: 0,
          icon:
            "https://t00img.yangkeduo.com/goods/2020-01-17/4af0d32c58b1363f1f918718f903001f.gif?imageMogr2/sharpen/50/strip%7CimageView2/2/w/117/q/80/format/webp",
          text: "限时秒杀",
          linkTo: ""
        },
        {
          id: 1,
          icon:
            "https://t00img.yangkeduo.com/goods/2020-01-17/4af0d32c58b1363f1f918718f903001f.gif?imageMogr2/sharpen/50/strip%7CimageView2/2/w/117/q/80/format/webp",
          text: "限时秒杀",
          linkTo: ""
        },
        {
          id: 2,
          icon:
            "https://t00img.yangkeduo.com/goods/2020-01-17/4af0d32c58b1363f1f918718f903001f.gif?imageMogr2/sharpen/50/strip%7CimageView2/2/w/117/q/80/format/webp",
          text: "限时秒杀",
          linkTo: ""
        },
        {
          id: 3,
          icon:
            "https://t00img.yangkeduo.com/goods/2020-01-17/4af0d32c58b1363f1f918718f903001f.gif?imageMogr2/sharpen/50/strip%7CimageView2/2/w/117/q/80/format/webp",
          text: "限时秒杀",
          linkTo: ""
        },
        {
          id: 4,
          icon:
            "https://t00img.yangkeduo.com/goods/2020-01-17/4af0d32c58b1363f1f918718f903001f.gif?imageMogr2/sharpen/50/strip%7CimageView2/2/w/117/q/80/format/webp",
          text: "限时秒杀",
          linkTo: ""
        },
        {
          id: 5,
          icon:
            "https://t00img.yangkeduo.com/goods/2020-01-17/4af0d32c58b1363f1f918718f903001f.gif?imageMogr2/sharpen/50/strip%7CimageView2/2/w/117/q/80/format/webp",
          text: "限时秒杀",
          linkTo: ""
        },
        {
          id: 6,
          icon:
            "https://t00img.yangkeduo.com/goods/2020-01-17/4af0d32c58b1363f1f918718f903001f.gif?imageMogr2/sharpen/50/strip%7CimageView2/2/w/117/q/80/format/webp",
          text: "限时秒杀",
          linkTo: ""
        },
        {
          id: 7,
          icon:
            "https://t00img.yangkeduo.com/goods/2020-01-17/4af0d32c58b1363f1f918718f903001f.gif?imageMogr2/sharpen/50/strip%7CimageView2/2/w/117/q/80/format/webp",
          text: "限时秒杀",
          linkTo: ""
        },
        {
          id: 8,
          icon:
            "https://t00img.yangkeduo.com/goods/2020-01-17/4af0d32c58b1363f1f918718f903001f.gif?imageMogr2/sharpen/50/strip%7CimageView2/2/w/117/q/80/format/webp",
          text: "限时秒杀",
          linkTo: ""
        },
        {
          id: 9,
          icon:
            "https://t00img.yangkeduo.com/goods/2020-01-17/4af0d32c58b1363f1f918718f903001f.gif?imageMogr2/sharpen/50/strip%7CimageView2/2/w/117/q/80/format/webp",
          text: "限时秒杀",
          linkTo: ""
        }
      ],
      card:[
        {num:"10000",price:"5.00",title:"文竹植物发财树盆栽去甲醛客厅办公室内招财开业幸福树绿植大盆景",thumb:"https://t00img.yangkeduo.com/goods/images/2020-01-07/34f191317274cfc18d979767ce06ae23.jpeg?imageMogr2/sharpen/50/strip%7CimageView2/2/w/312/q/80/format/webp"},
        {num:"10000",price:"5.00",title:"文竹植物发财树盆栽去甲醛客厅办公室内招财开业幸福树绿植大盆景",thumb:"https://t00img.yangkeduo.com/goods/images/2020-01-07/34f191317274cfc18d979767ce06ae23.jpeg?imageMogr2/sharpen/50/strip%7CimageView2/2/w/312/q/80/format/webp"},
        {num:"10000",price:"5.00",title:"文竹植物发财树盆栽去甲醛客厅办公室内招财开业幸福树绿植大盆景",thumb:"https://t00img.yangkeduo.com/goods/images/2020-01-07/34f191317274cfc18d979767ce06ae23.jpeg?imageMogr2/sharpen/50/strip%7CimageView2/2/w/312/q/80/format/webp"},
        {num:"10000",price:"5.00",title:"文竹植物发财树盆栽去甲醛客厅办公室内招财开业幸福树绿植大盆景",thumb:"https://t00img.yangkeduo.com/goods/images/2020-01-07/34f191317274cfc18d979767ce06ae23.jpeg?imageMogr2/sharpen/50/strip%7CimageView2/2/w/312/q/80/format/webp"},
        {num:"10000",price:"5.00",title:"文竹植物发财树盆栽去甲醛客厅办公室内招财开业幸福树绿植大盆景",thumb:"https://t00img.yangkeduo.com/goods/images/2020-01-07/34f191317274cfc18d979767ce06ae23.jpeg?imageMogr2/sharpen/50/strip%7CimageView2/2/w/312/q/80/format/webp"},
        {num:"10000",price:"5.00",title:"文竹植物发财树盆栽去甲醛客厅办公室内招财开业幸福树绿植大盆景",thumb:"https://t00img.yangkeduo.com/goods/images/2020-01-07/34f191317274cfc18d979767ce06ae23.jpeg?imageMogr2/sharpen/50/strip%7CimageView2/2/w/312/q/80/format/webp"},
      ]
    };
  },
  methods: {
    handlePreview(index) {
      ImagePreview({
        images: this.images,
        startPosition: index
      });
    }
  },
  mounted(){
    const ele = this.$refs.swiperContainer
    var mySwiper = new Swiper(ele,{
      freeMode : true,
      scrollbar: {
        el: '.swiper-scrollbar',
        dragSize: 55,
      },
    })
    mySwiper.scrollbar.$el.css('height','3px');
    mySwiper.scrollbar.$dragEl.css('background','#ff6600');
    mySwiper.scrollbar.updateSize();
  }
};
</script>

<style lang="less" scoped>
.swipe img {
  height: 280px;
}
.hot /deep/ .van-grid-item__content {
  padding: 12px 8px;
}
.swiper-scrollbar{
  bottom:0;
  left:calc(50% - 95px);
  width: 190px;
}
</style>