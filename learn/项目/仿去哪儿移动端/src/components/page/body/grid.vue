<template>
  <div class="s-grid">
    <div ref="swiper" class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in category" :key="index">
          <van-grid :border="false" :column-num="4">
            <van-grid-item v-for="value in item" :key="value.id" :to="{name:value.linkTo,params:{id:value.id}}">
              <van-image width="55" height="5+5" lazy-load :src="value.src" />
              <span class="message">{{value.name}}</span>
            </van-grid-item>
          </van-grid>
        </div>
      </div>
      <!-- <div ref="pag" class="swiper-pagination"></div> -->
    </div>
    <ul class="listitem">
      <li>
        <i class="iconfont icon-icon-test"></i>
        <span>定位 {{crumb}}</span>
      </li>
      <li @click="listitem">
        <i class="iconfont icon-icon35"></i>
        <span>必游榜单</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "s-grid",
  data() {
    return {
      crumb: "",
      category: {
        category1: [
          {
            id: 4,
            name: "景点门票",
            src: "images/f3dd6c383aeb3b02.png",
            linkTo: "listitem"
          },
          {
            id: 0,
            name: "马仁奇峰",
            src: "images/f04285731d7121da1b9028e2bf431695.png",
            linkTo: "scenic"
          },
          {
            id: 2,
            name: "一日游",
            src: "images/13ceb38dcf262f02.png",
            linkTo: "search"
          },
          {
            id: 3,
            name: "芜湖方特",
            src: "images/8246f27355943202.png",
            linkTo: "listitem"
          },
          {
            id: 1,
            name: "大白鲸海洋馆",
            src: "images/26ffa31b56646402.png",
            linkTo: "scenic"
          },
          {
            id: 5,
            name: "亲子游",
            src: "images/26ffa31b56646402.png",
            linkTo: "search"
          },
          {
            id: 6,
            name: "动植物园",
            src: "images/2548667cb6e902.png",
            linkTo: "search"
          },
          {
            id: 7,
            name: "全部玩乐",
            src: "images/416c6ab3368d1f02.png",
            linkTo: "listitem"
          }
        ]
      }
    };
  },
  methods: {
    listitem() {
      this.$router.push({ name: "listitem" });
    }
  },
  created() {
    this.crumb = this.$store.state.cityName;
  },
  mounted() {
    let swiper = this.$refs.swiper;
    let pag = this.$refs.pag;
      var mySwiper = new Swiper(".swiper-container", {
        pagination: {
          el: pag
        }
      });

  }
};
</script>

<style lang="less" scoped>
.s-grid {
  background-color: #fff;
}
.swiper-container {
  height: 170px;
  .message {
    font-size: 14px;
  }
  /deep/ .van-grid-item__content {
    padding: 5px 0;
  }
}
.listitem {
  display: flex;
  border-top: 1px solid #ccc;
  li {
    flex: 1;
    padding: 10px 0;
    text-align: center;
    font-size: 14px;
    border-right: 1px solid #ccc;
  }
  li:last-child {
    border-right: 0;
  }
}
</style>