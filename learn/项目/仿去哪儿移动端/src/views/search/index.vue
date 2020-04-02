<template>
  <div class="s-search">
    <div class="left" @click="back">
      <i class="iconfont icon-houtuishangyige"></i>
    </div>
    <div class="center">
      <van-search v-model="value" placeholder="请输入搜索关键词" />
    </div>
    <div class="right">
      <span>搜索</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "s-search",
  data(){
    return {
      value:""
    }
  },
  methods: {
    back(){
      this.$router.push({name:"page"},()=>{})
    }
  }
};
</script>

<style lang="less" scoped>
.s-search {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  font-size: 16px;
  background-color: #fff;
  div {
    height: 75%;
    padding: 0 10px;
  }
  .left {
    display: flex;
    align-items: center;
    flex: 1;
    text-align: center;
    i {
      font-size: 22px;
      color: #aaa;
    }
  }
  .center {
    flex: 8;
    height: 100%;
    line-height: 45px;
    .van-search{
        height: 100%;
        padding:0;
        .van-search__content{
            display: flex;
            align-items: center;
        }
    }
  }
  .right {
    flex: 2;
    display: flex;
    align-items: center;
    a {
      padding-left: 10px;
      color: #aaa;
    }
  }
}
</style>