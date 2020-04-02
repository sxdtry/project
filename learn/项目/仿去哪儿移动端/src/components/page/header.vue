<template>
  <div class="s-header">
    <div class="left">
      <i class="iconfont icon-houtuishangyige"></i>
    </div>
    <div class="center">
      <router-link :to="{name:'search'}" class="search">
          <i class="iconfont icon-iconseach"></i>
          <span>请输入城市/景点/游玩主题</span>
      </router-link>
    </div>
    <div class="right">
      <router-link :to="{name:'crumb'}" class="crumb">
          <span>{{cityName}}</span>
          <i class="iconfont icon-xia"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "s-header",
  data(){
    return {
      cityName:"芜湖"
    }
  },
  methods: {
    onClickLeft() {},
    onClickRight() {}
  },
  created(){
    if(this.$store.state.cityName){
      this.cityName = this.$store.state.cityName
    }else{
      this.$store.commit("selectCity",this.cityName)
    }
  }
};
</script>

<style lang="less" scoped>
.s-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  font-size: 16px;
  background-color: #00bcd4;
  div {
    height: 75%;
    padding: 0 10px;
  }
  .left {
      display: flex;
      align-items: center;
    flex: 1;
    text-align:center;
    i {
      font-size: 22px;
      color: #fff;
    }
  }
  .center {
    flex: 8;
    padding:0;
    a {
      display: block;
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
      background-color: #fff;
      border-radius:5px;
      padding:0 5px;
      i,span{
          font-size:14px;
          color:#ccc;
          margin-right:5px;
      }
    }
  }
  .right {
    flex: 2;
    display: flex;
      align-items: center;
      a{
          padding-left:10px;
          color:#fff;
      }
  }
}
</style>