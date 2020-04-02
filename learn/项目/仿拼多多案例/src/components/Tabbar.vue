<template>
  <div class="tabbar">
    <van-tabbar
      v-if="this.$store.state.flag"
      v-model="active"
      @change="handleLinkTo"
      fixed

    >
      <van-tabbar-item
        v-for="item in tabber"
        :key="item.id"
        :name="item.linkTo"
        :icon="item.icon"
        >
        {{item.text}}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name:"tabbar",
  data() {
    return {
      active: 'user',
      tabber:[
        {id:0,icon:"home-o",linkTo:"home",text:"首页"},
        {id:1,icon:"label-o",linkTo:"concern",text:"关注"},
        {id:2,icon:"todo-list-o",linkTo:"classify",text:"分类"},
        {id:3,icon:"chat-o",linkTo:"chat",text:"聊天"},
        {id:4,icon:"user-o",linkTo:"user",text:"个人中心"},
      ]
    };
  },
  methods:{
    handleLinkTo(){
      this.$router.replace({name:this.active})
    }
  },
  mounted(){
    if(location.hash != '#/'){
      this.active = location.hash.substr(2,location.hash.length - 2)
    }
  },
};
</script>