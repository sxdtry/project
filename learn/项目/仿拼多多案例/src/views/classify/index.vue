<template>
    <div class="classify">
        <div class="tab-search">
            <div class="search">
                <van-icon name="search" />
                 <span>圈圈毛外衣</span>
            </div>
        </div>
        <hr />
        <div class="sidebar">
            <div class="sidebar-left" >
                <van-sidebar v-model="activeKey" @change="handleChange">
                    <van-sidebar-item
                        v-for="(item,index) in item"
                        :title="item.name"
                        :key="index"
                        :to="item.linkTo"
                    />
                </van-sidebar>
            </div>
            <div class="sidebar-right">
                <router-view />
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name:"classify",
    data() {
        return {
            activeKey: "recommend",
            item:[
                {name:"推荐",linkTo:"recommend"},
                {name:"食品",linkTo:"foot"},
                {name:"食品",linkTo:"foot"},
                {name:"食品",linkTo:"foot"},
                {name:"食品",linkTo:"foot"},
                {name:"食品",linkTo:"foot"},
                {name:"食品",linkTo:"foot"},
                {name:"食品",linkTo:"foot"},
                {name:"食品",linkTo:"foot"},
                {name:"食品",linkTo:"foot"},
                {name:"食品",linkTo:"foot"},
                {name:"食品",linkTo:"foot"},
                {name:"食品",linkTo:"foot"},
                {name:"食品",linkTo:"foot"},
                {name:"食品",linkTo:"foot"},
                {name:"食品",linkTo:"foot"},
                {name:"食品",linkTo:"foot"},
                {name:"食品",linkTo:"foot"},
                {name:"食品",linkTo:"foot"},
                {name:"食品",linkTo:"foot"},
                {name:"食品",linkTo:"foot"},
            ]
        }
    },
    methods:{
        handleChange(){
            // console.log(this.activeKey)
            // this.$router.replace({name:"recommend",params:{id:this.activeKey}})
            // this.$router.replace({name:"class",params:{id:this.activeKey}})
        }
    }
}
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
hr{
    margin: 5px 0 0 0;
    border-color:#ededed;
}
.sidebar{
    position: relative;
    height: 1133px;
    // background-color: #0f0;
    .sidebar-left{
        position: absolute;
        top:0;
        left:0;
        width: 170px;
        height: 100%;
        overflow: scroll;
        z-index: 1
    }
    .sidebar-right{
        position: absolute;
        top:0;
        right:0;
        width: 580px;
        height: 100%;
        overflow: scroll;
        z-index: 1;
        // background-color: #f60;
    }
}
</style>