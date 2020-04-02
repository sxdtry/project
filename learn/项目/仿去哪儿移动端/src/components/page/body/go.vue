<template>
  <div class="s-go">
    <h3>周末去哪儿</h3>
    <div @click="go(item.id,item.text)" class="introduce" v-for="item in introduce" :key="item.id">
      <img :src="item.src" />
      <p>{{item.text}}</p>
      <p>{{item.message}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "s-go",
  data() {
    return {
      introduce: [
        {
          id: 0,
          text: "芜湖必打卡",
          message: "云开看树色，江静听潮声",
          src: "images/56a7a471ea2986.jpg_r_640x214_68aed5b3.jpg"
        },
        {
          id: 1,
          text: "当地人带你玩",
          message: "云开看树色，江静听潮声",
          src: "images/26884ae7d9969c.jpg_r_640x214_c3e02a8c.jpg"
        },
        {
          id: 2,
          text: "黟县旅游",
          message:
            "山水相依垂柳荷田色的江南小城，探寻桃花人家，感受静谧温馨田园生活",
          src: "images/0285e145e82233.jpg_r_640x214_b5f10121.jpg"
        },
        {
          id: 3,
          text: "黄山必打卡",
          message: "清泉，烟幕，轻舟",
          src: "images/a5ec29839a2a9e.jpg_r_640x214_53b4f72d.jpg"
        },
        {
          id: 4,
          text: "合肥必游",
          message: "尽览名胜旖旎风光，到古迹吊古凭今",
          src: "images/23202a6a5864d8.jpg_r_640x214_92f21625.jpg"
        }
      ]
    };
  },
  methods:{
    go(id,text){
      this.$router.push({name:"go",params:{id:id,text:text}},()=>{})
    }
  }
};
</script>

<style lang="less" scoped>
h3 {
  font-size: 18px;
  font-weight: 100;
  padding: 10px 0;
  margin: 15px 0 0;
}
.introduce {
  img {
    display: block;
    width: 100%;
  }
  p {
    font-size: 14px;
    margin: 0;
    text-indent:16px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-right:80px;
  }
  p:last-child {
    font-size: 12px;
    color: #aaa;
    margin-bottom:10px;
  }
}
</style>