<template>
  <div class="s-header">
    <div class="introduce">
      <img :src="scenic.src" alt />
      <span class="back" @click="back">&lt;</span>
      <div class="picture">
        <i class="iconfont icon-photo"></i>
        <span>19</span>
      </div>
      <p>
        {{scenic.name}}
        <span>视频 &gt;</span>
      </p>
    </div>
    <van-row class="grade" type="flex" justify="center">
      <van-col span="12">
        <van-col span="20">
          <van-row class="grade-class">{{scenic.grade}}分 很棒</van-row>
          <van-row class="discribe">5267条评论 5条攻略</van-row>
        </van-col>
        <van-col span="4" class="arrows">&gt;</van-col>
      </van-col>
      <van-col span="12">
        <van-col span="20">
          <van-row class="scenic-introduce">景点简介</van-row>
          <van-row class="discribe">开发时间、贴士</van-row>
        </van-col>
        <van-col span="4" class="arrows">&gt;</van-col>
      </van-col>
    </van-row>
    <van-row type="flex" justify="center">
      <van-col span="24" class="curmb">
        <i class="iconfont icon-icon-test"></i>
        安徽省芜湖市
      </van-col>
    </van-row>
    <van-notice-bar :text="text" left-icon="volume-o" />
  </div>
</template>

<script>
export default {
  name: "s-header",
  props: ["num"],
  data(){
      return{
          text:"【景区现已开放】疫情防控期间，进入景区需佩戴口罩，与他人保持1.5米距离。同时，请您配合景区做好入园体温检测及实名登记工作。由此给您带来不便，敬请谅解。"
      }
  },
  computed: {
    scenic() {
      console.log(this.$store.state.listitem,this.num)
      return this.$store.state.listitem[this.num];
    }
  },
  methods:{
    back(){
      this.$router.push({name:"page"},()=>{})
    }
  }
};
</script>

<style lang="less" scoped>
.s-header {
  background-color: #fff;
  .introduce {
    position: relative;
    height: 206px;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
    .back {
      position: absolute;
      top: 10px;
      left: 10px;
      width: 36px;
      height: 36px;
      line-height:36px;
      text-align: center;
      font-size:25px;
      background-color: rgba(0, 0, 0, 0.6);
      color: #fff;
      border-radius: 50%;
    }
    .picture {
      position: relative;
      bottom: 100px;
      left: 10px;
      width: 60px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      color: #fff;
      font-size: 12px;
      background-color: rgba(0, 0, 0, 0.6);
      border-radius: 10px;
      i {
        font-size: 8px;
        margin-right: 5px;
      }
    }
    p {
      position: absolute;
      bottom: 10px;
      width: 100%;
      padding: 0 10px;
      color: #fff;
      span {
        position: absolute;
        right: 20px;
      }
    }
  }
  .van-row,
  .van-col {
    text-indent: 10px;
  }
  .grade {
    padding-top:10px;
    .grade-class {
      font-size: 20px;
      color: #f83000;
    }
    .discribe {
      font-size: 12px;
      color: #9e9e9e;
    }
    .scenic-introduce {
      font-size: 16px;
      color: #000;
    }
    .arrows {
      font-size: 20px;
      color: #9e9e9e;
      height: 100%;
      line-height: 42px;
      text-indent: 0;
    }
  }
  .curmb {
    font-size: 16px;
    color: #9e9e9e;
    padding:10px 0;
  }
}
</style>