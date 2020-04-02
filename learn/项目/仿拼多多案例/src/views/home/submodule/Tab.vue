<template>
  <div class="tab">
      <div class="tab-search">
        <div class="search">
          <van-icon name="search" />
          <span>圈圈毛外衣</span>
        </div>
      </div>
      <van-tabs
        v-model="active"
        :swipe-threshold="7"
        line-width="35"
        lazy-render
        sticky
        :border="false"
        @change="handleChange"
      >
        <van-tab
          v-for="item in tab" 
          :key="item.id" 
          :title="item.text" 
          :name="item.linkTo"
         >
          <router-view />
        </van-tab>
      </van-tabs>
  </div>
</template>

<script>
export default {
  name: "tab",
  data() {
    return {
      active: "hot",
      tab: [
        { id: 0, text: "热门", linkTo: "hot" },
        { id: 1, text: "女装", linkTo: "frock" },
        { id: 2, text: "鞋包", linkTo: "shoe" },
        { id: 3, text: "男装", linkTo: "boy" },
        { id: 4, text: "食品", linkTo: "food" },
        { id: 5, text: "母婴", linkTo: "baby" },
        { id: 6, text: "手机", linkTo: "phone" },
        { id: 7, text: "百货", linkTo: "store" },
        { id: 8, text: "内衣", linkTo: "underwear" },
        { id: 9, text: "电器", linkTo: "wiring" },
        { id: 10, text: "家纺", linkTo: "textile" },
        { id: 11, text: "水果", linkTo: "fruit" },
        { id: 12, text: "家具", linkTo: "furniture" },
        { id: 13, text: "美妆", linkTo: "beauty" },
        { id: 14, text: "家装", linkTo: "decoration" },
        { id: 15, text: "运动", linkTo: "sports" },
        { id: 16, text: "汽车", linkTo: "car" },
        { id: 17, text: "医药", linkTo: "medicine" },
        { id: 18, text: "电脑", linkTo: "computer" },
        { id: 19, text: "海淘", linkTo: "haitao" }
      ]
    };
  },
  methods: {
    handleChange(){
      this.$router.replace({name:'hot',params:{id:this.active}})
      this.$router.replace({name:'dynamic',params:{id:this.active}})
    }
  },
  mounted(){
    this.$router.replace({name:'hot'});
    document.addEventListener('mousewheel',fn,false);
    function fn(e){
      const count = -e.wheelDelta/120;
    }
  }
};
</script>

<style lang="less" scoped>
.tab-search {
  width: 700px;
  height: 75px;
  line-height: 75px;
  padding: 10px 25px;
  text-align: center;
  .search {
    border-radius: 15px;
    background-color: #ededed;
    background-clip: content-box;
  }
  i,
  span {
    font-size: 30px;
    vertical-align: middle;
    color: #bfbfbf;
  }
  i {
    font-size: 40px;
  }
}
// .tab /deep/ .van-hairline--top-bottom::after{
//   border:none !important;
// }
</style>