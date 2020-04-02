<template>
  <div id="app">
    <div class="header">
      <router-link :to="{name:'page'}">首页</router-link>
      <router-link :to="{name:'ligin'}">登陆</router-link>
      <router-link :to="{name:'enroll'}">注册</router-link>
      <router-link :to="{name:'about'}">关于</router-link>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import "./assets/css/public.css"
export default {
  name:"app"
}
</script>
<style lang="less">
  #app{
    width: 1300px;
    margin:auto;
  }
  .header{
    display: flex;
    justify-content: flex-end;
    align-items:center;
    width: 100%;
    height: 60px;
    background-color: #f00;
    a{
      display: block;
      margin-right:20px;
      padding:10px 15px;
      border: 2px solid #0af;
      border-radius: 5px;
      color:#fff;
    }
  }
  .main{
    width: 100%;
    height: calc(100vh - 60px);
    // background-color: #700;
  }
</style>
