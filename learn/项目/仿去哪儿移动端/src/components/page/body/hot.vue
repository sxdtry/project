<template>
  <div class="s-hot">
    <h3>
      <img src="images/bfbb9874e8f11402.png" />
      本周热门榜单
    </h3>
    <swiper v-if="flag" :options="swiperOption" ref="mySwiper">
      <swiper-slide
        @click="jump(item.id)"
        class="swiper-slide"
        v-for="item in newListitem"
        :key="item.id"
      >
        <img class="top" v-if="item.top" :src="item.top" />
        <img class="listitem" :src="item.src" />
        <p>{{item.name}}</p>
        <p>￥{{item.price}}起</p>
      </swiper-slide>
      <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
  </div>
</template>

<script>
import 'swiper/css/swiper.css'
import {Swiper,SwiperSlide} from 'vue-awesome-swiper';
export default {
  name: "s-hot",
  data() {
    let vm = this
    return {
      flag:false,
      listitem: [
        {
          id: 0,
          name: "马仁奇峰",
          src: "images/5b0a8750d267276fa3.img.jpg_250x250_c764a6ca.jpg",
          price: "32.5",
          grade: 5
        },
        {
          id: 1,
          name: "芜湖新华联大白鲸海洋公园",
          src: "images/dd62beca4b43db6ca3.img.jpg_250x250_2c2cfbc7.jpg",
          price: "10.5",
          grade: 5
        },
        {
          id: 2,
          name: "芜湖大浦乡村世界",
          src: "images/8e54393ae24c8c46a3.img.jpg_250x250_2b57f1aa.jpg",
          price: "32.5",
          grade: 5
        },
        {
          id: 3,
          name: "珩琅山玫瑰谷",
          src: "images/d5c28b65f7602c2a3.img.png_250x250_75637aae.png",
          price: "9.9",
          grade: 5
        },
        {
          id: 4,
          name: "鸠兹古镇",
          src: "images/397e9171aacd5fb0a3.img.jpg_250x250_d9a65eed.jpg",
          price: "68.5",
          grade: 5
        }
      ],
      top: [
        "images/159673b63e6ca702.png",
        "images/36d0c4adaebbbc02.png",
        "images/edc47ffef9e96b02.png"
      ],
      swiperOption: {
        slidesPerView : 3, 
        freeMode: true,
        scrollbar: {
          el: ".swiper-scrollbar",
          hide: true,
          dragSize: 100
        },
        on:{
          click:function(){
            let id = this.clickedIndex
            vm.jump(id)
          }
        }
      }
    };
  },
  computed: {
    newListitem() {
      this.listitem.forEach((value, key) => {
        if (key < 3) {
          value.top = this.top[key];
        }
      });
      return this.listitem;
    }
  },
  components: {
    swiper:Swiper,
    swiperSlide:SwiperSlide
  },
  methods: {
    jump(id) {
      this.$router.push({ name: "scenic", params: { id: id } }, () => {})
    },
  },
  created(){
    this.$store.commit("listitem",this.listitem)
    this.$nextTick(()=>{
      this.flag=true;
    })
  }
};
</script>

<style lang="less" scoped>
.s-hot {
  background-color: #fff;
  h3 {
    font-size: 18px;
    font-weight: 100;
    padding: 10px 0;
    margin: 15px 0 0;
    img {
      width: 16px;
    }
  }
  .swiper-container {
    padding-bottom: 8px;
    .swiper-wrapper {
      .swiper-slide {
        font-size: 12px;
        text-align: center;
        .listitem {
          width: 100px;
          height: 100px;
        }
        .top {
          position: absolute;
          top: 0;
          left: 12px;
          width: 42px;
          height: 20px;
        }
        p {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          margin: 0;
        }
      }
    }
  }
}
</style>