<template>
  <div class="s-search">
    <van-search v-model="keyword" show-action placeholder="请输入搜索关键词">
      <div slot="left" @click="back">
        <i class="iconfont icon-houtuishangyige"></i>
      </div>
      <div slot="action" @click="search">搜索</div>
    </van-search>

    <van-dropdown-menu>
      <van-dropdown-item v-model="classify" :options="option1" />
      <van-dropdown-item v-model="sort" :options="option2" />
    </van-dropdown-menu>

    <div v-for="item in listitem" :key="item.id" class="listitem">
      <van-card :price="item.price" :thumb="item.src">
        <div slot="title">
          <h4 class="title">{{item.name}}</h4>
        </div>
        <div slot="tags">
          <van-rate :size="18" v-model="item.grade" readonly />
        </div>
      </van-card>
      <p  v-if="text[item.id].text"><span>{{text[item.id].text}}</span><span>{{text[item.id].price1}}</span></p>
      <p v-if="text[item.id].message"><span>{{text[item.id].message}}</span><span>{{text[item.id].price2}}</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "s-search",
  data() {
    return {
      keyword: "",
      classify: 0,
      sort: "a",
      option1: [
        { text: "全部分类", value: 0 },
        { text: "游乐场", value: 1 },
        { text: "文化古迹", value: 2 },
        { text: "公园", value: 3 },
        { text: "室内娱乐", value: 4 },
        { text: "户外拓展", value: 5 }
      ],
      option2: [
        { text: "推荐排序", value: "a" },
        { text: "离我最近", value: "b" },
        { text: "人气最高", value: "c" }
      ],
      text:[
          {text:"【芜湖市民专享】马仁奇峰成人票（3月特惠）",message:"【芜湖市民专享】成人票+玻璃桥+玻璃栈道（3月特惠）",price1:"￥38",price2:"￥98"},
          {text:"【预售】大白鲸海洋公园门票抵用券成人票",message:"",price1:"￥9.9",price2:""},
          {text:"大浦乡村世界成人票（含海啸馆）",message:"",price1:"￥45",price2:""},
          {text:"珩琅山玫瑰谷成人票",message:"",price1:"￥9.9",price2:"￥9.9"},
          {text:"",message:"",price1:"￥",price2:""},
      ]
    };
  },
  computed: {
    listitem() {
      return this.$store.state.listitem.filter((value,index)=>{
          if(index<4)return value
      });
    },
    a(){
        return this.text
    }
  },
  methods: {
    back() {
      this.$router.push({ name: "page" }, () => {});
    },
    search() {}
  }
};
</script>
<style lang="less" scoped>
i {
  font-size: 22px;
  color: #aaa;
  padding: 0 10px 0 0;
}
.van-dropdown-menu {
  height: 40px;
}
.listitem{
  background-color: #fff;
    p{
        font-size:14px;
        span:first-child{
            display: inline-block;
            width: 280px;
            overflow: hidden;
            white-space:nowrap;
            text-overflow: ellipsis;
        }
        span:last-child{
            position: absolute; 
            right:0;
            padding-right:10px;
            font-size:16px;
            color:red
        }
    }
}
</style>