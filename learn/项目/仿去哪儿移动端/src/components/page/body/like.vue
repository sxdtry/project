<template>
  <div class="s-like">
    <h3>
      <img src="images/ebc329f16c55bb02.png" />
      猜你喜欢
    </h3>
    <van-card
      v-for="item in like"
      :key="item.id"
      :price="item.price"
      :thumb="item.src"
      @click="jump(item.id)"
    >
    <div slot="title">
        <h4 class="title">{{item.name}}</h4>
      </div>
      <div slot="tags">
        <van-rate :size="18" v-model="item.grade" readonly />
      </div>
    </van-card>
    <hr/>
    <p class="all">查看所有产品</p>
  </div>
</template>

<script>
export default {
  name: "s-like",
  computed:{
    like(){
      return this.$store.state.listitem
    }
  },
  methods:{
    jump(id){
      this.$router.push({name:"scenic",params:{id:id}},()=>{})
    }
  },
};
</script>

<style lang="less" scoped>
.s-like {
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
  h4{
    font-size:16px;
    margin: 10px 0;
  }
  .all{
    font-size:14px;
    text-align: center;
    margin:0;
    padding:10px 0;
    color:#52CCEB;
  }
  hr{
    color:#efe;
    margin-bottom:0;
  }
}
</style>