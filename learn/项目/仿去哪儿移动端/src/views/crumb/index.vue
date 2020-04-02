<template>
  <div class="s-crumb">
    <div class="header">
      <div class="left" @click="back">
        <i class="iconfont icon-houtuishangyige"></i>
      </div>
      <div class="center">
        <span>选择城市</span>
      </div>
    </div>
    <div class="container">
      <h5>热门城市</h5>
      <ul class="hot-city">
        <li v-for="item in hotCities" :key="item.id" @click="select(item.name)">
          <span>{{item.name}}</span>
        </li>
      </ul>
    </div>
    <div class="container container-letter">
      <h5>字母排序</h5>
      <ul class="letter">
        <li v-for="(item,key) in city" :key="item.id" @click="crumb(key)">
          <span>{{key}}</span>
        </li>
      </ul>
    </div>
    <div class="container" v-for="(item,key) in city" :key="key">
      <h5 :id="key">{{key}}</h5>
      <ul class="hot-city">
        <li v-for="value in item" :key="value.id"  @click="select(value.name)">
          <span>{{value.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "s-crumb",
  data() {
    return {
      hotCities: [],
      city: []
    };
  },
  methods: {
    crumb(key) {
      let ele = document.getElementById(key);
      ele.scrollIntoView(true);
    },
    select(value){
        this.$store.commit("selectCity",value)
        this.back()
    },
    back(){
        this.$router.push({name:"page"},()=>{})
    }
  },
  created() {
    this.axios.get("./city.json").then(res => {
      this.city = res.data.data.cities;
      this.hotCities = res.data.data.hotCities;
    });
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
    span{
        margin-left:90px;
    }
  }
}
h5 {
  margin: 0;
  padding: 10px 0;
  text-indent: 18px;
  font-weight: 100;
  background-color: #00bcd4;
}
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  li {
    height: 45px;
    line-height: 45px;
    text-align: center;
    background-color: #fff;
    font-size: 14px;
  }
}
.hot-city {
  li {
    width: 33%;
    margin-bottom: 1.5px;
    margin-right: 1.5px;
  }
  li:nth-child(3n) {
    margin-right: 0;
  }
}
.letter {
  background-color: #fff;
  li {
    width: 62.5px;
  }
}
.container-letter ~ .container {
  ul {
    li {
      width: 24%;
      margin-bottom: 1.5px;
      margin-right: 1.5px;
    }
    li:nth-child(4n) {
      margin-right: 0;
    }
  }
}
a {
  color: #000;
}
</style>