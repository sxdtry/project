<template>
  <div class="s-go">
    <div class="header">
      <div class="left" @click="back">
        <i class="iconfont icon-houtuishangyige"></i>
      </div>
      <div class="center">
        <span>{{this.$route.params.text}}</span>
      </div>
    </div>
    <ul>
        <li v-for="item in card[this.$route.params.id]" :key="item.id">
            <img :src="item.img" alt="">
            <h3>{{item.name}}<span v-if="item.price">￥{{item.price}}起</span><span v-if="!item.price">查看详情</span></h3>
            <p>{{item.message}}</p>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "s-go",
  data(){
      return{
          card:[
              [
                  {
                      id:0,name:"马仁奇峰",message:"体验式旅游精品景区",price:"38",img:"images/5b0a8750d267276fa3.img.jpg_640x276_f3398abb.jpg"
                  },
                  {
                      id:1,name:"芜湖方特水上乐园（三期）",message:"八大区域带你畅游水上主题乐园",price:"",img:"images/b48e483ebd5feea690.img.jpg_640x276_f7b32d57.jpg"
                  },
                  {
                      id:2,name:"芜湖方特梦幻王国（二期）",message:"东方梦幻乐园，亚洲科幻神奇",price:"",img:"images/b48e483ebd5feea690.img.jpg_640x276_f7b32d57.jpg"
                  },
                  {
                      id:3,name:"芜湖方特东方神画（四期）",message:"非物质文化博览园",price:"",img:"images/eb128df3c858ab92a3.img.jpg_640x276_48b93e0f.jpg"
                  },
                  {
                      id:4,name:"芜湖新华联大白鲸海洋公园",message:"人与自然、人与海洋极地生灵和谐共生",price:"9.9",img:"images/dd62beca4b43db6ca3.img.jpg_640x276_5a742622.jpg"
                  },
              ],
              [
                  {
                      id:0,name:"马仁奇峰",message:"体验式旅游精品景区",price:"38",img:"images/5b0a8750d267276fa3.img.jpg_640x276_f3398abb.jpg"
                  },
                  {
                      id:1,name:"芜湖方特水上乐园（三期）",message:"八大区域带你畅游水上主题乐园",price:"",img:"images/b48e483ebd5feea690.img.jpg_640x276_f7b32d57.jpg"
                  },
                  {
                      id:2,name:"芜湖方特梦幻王国（二期）",message:"东方梦幻乐园，亚洲科幻神奇",price:"",img:"images/b48e483ebd5feea690.img.jpg_640x276_f7b32d57.jpg"
                  },
                  {
                      id:3,name:"芜湖方特东方神画（四期）",message:"非物质文化博览园",price:"",img:"images/eb128df3c858ab92a3.img.jpg_640x276_48b93e0f.jpg"
                  },
                  {
                      id:4,name:"芜湖新华联大白鲸海洋公园",message:"人与自然、人与海洋极地生灵和谐共生",price:"9.9",img:"images/dd62beca4b43db6ca3.img.jpg_640x276_5a742622.jpg"
                  },
              ],
              [
                  {
                      id:0,name:"马仁奇峰",message:"体验式旅游精品景区",price:"38",img:"images/5b0a8750d267276fa3.img.jpg_640x276_f3398abb.jpg"
                  },
                  {
                      id:1,name:"芜湖方特水上乐园（三期）",message:"八大区域带你畅游水上主题乐园",price:"",img:"images/b48e483ebd5feea690.img.jpg_640x276_f7b32d57.jpg"
                  },
                  {
                      id:2,name:"芜湖方特梦幻王国（二期）",message:"东方梦幻乐园，亚洲科幻神奇",price:"",img:"images/b48e483ebd5feea690.img.jpg_640x276_f7b32d57.jpg"
                  },
                  {
                      id:3,name:"芜湖方特东方神画（四期）",message:"非物质文化博览园",price:"",img:"images/eb128df3c858ab92a3.img.jpg_640x276_48b93e0f.jpg"
                  },
                  {
                      id:4,name:"芜湖新华联大白鲸海洋公园",message:"人与自然、人与海洋极地生灵和谐共生",price:"9.9",img:"images/dd62beca4b43db6ca3.img.jpg_640x276_5a742622.jpg"
                  },
              ],
          ]
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
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  font-size: 16px;
  background-color: #eee;
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
    span {
      margin-left: 90px;
    }
  }
}
li{
    background-color: #fff;
    margin-bottom:10px;
}
img{
    width: 100%;
}
h3{
    position: relative;
    font-weight:100;
    font-size:20px;
    margin:10px 0;
    span{
        position: absolute;
        right:0;
        color:#f60;
        font-size:16px
    }
}
p{
    font-size:14px;
    color:#ccc
}
</style>