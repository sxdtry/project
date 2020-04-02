<template>
  <div class="s-chat">
    <h3>用户评论</h3>
    <div class="chat">
      <ul>
        <li v-for="(item,index) in chat[num]" :key="index">
          <div>
            <van-rate size="14" v-model="item.grade" readonly />
            <span>{{item.time}}</span>
          </div>
          <p ref="content">{{item.comment}}</p>
          <span ref="flag" class="all" @click="getClick(index)">查看全部</span>
          <div class="img">
              <img v-for="(value,index) in item.img" :key="index" :src="value">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "s-chat",
  props: ["num"],
  data() {
    return {
      flag: 0,
      getChat: ["查看全部", "收起"],
      chat: [
        [
          {
            grade: 5,
            time: "Y*6  2018-06-19",
            comment:
              "这次出去带着爸妈，60岁老人可以去柜面买票，凭着老年证可以优惠，除了大门票，里面所有玩的都要另外付费，话说这点让人有点不舒服，做了索道上山60元单程哦，风景还行吧，景区有的地方还需要更加人性化一点，玻璃桥的附近只有一个亭子可以休息，很晒，人多的话肯定不行，总体还行吧，除了玻璃桥没什么特别的，一般，没有玩过玻璃桥的可以去感受下",
            img: [
              "images/1d286f04eed15a02.jpg_228x168_35e7ee54.jpg",
              "images/5f0632d2b9a4b902.jpg_228x168_4549d27c.jpg",
              "images/9b98d640d57ba202.jpg_228x168_cba104fd.jpg"
            ]
          },
          {
            grade: 4,
            time: "g*2  2018-10-06",
            comment:
              "我们一行9位同学计划国庆长假4号去马仁奇峰去旅游！提前在去那儿网上分批次订了票，2号接到去那儿网短信通知：3号入园人数暴增，建议我们九点之前进园。和同学商量后我们从安庆早上六点准时发于八点到景区大门口，第一印象就是自驾游客很多车位非常紧张，心里暗暗庆幸来的早！好不容易找到停车位走了约十分钟路程来到自动取票机换票非常方便！好在景区范围不是太大，目前开放的景点比比较集中，八点多园区游人就比较多了！人多造成拍摄取景不太方便，玻璃桥和玻璃栈道上有人维护秩序不给停留！到上午十点左右入园人数暴增人就非常拥挤！等我们十二点下山出了大门人己拥挤不堪，停车和吃饭接待能力己超过园区极限了！我们就歺是选择在离园区五公里外的一个民宿，路上排队进园处的堵车车流不下4里路…总体感觉门票（含玻璃栈道、玻璃桥）155有点小贵，性价比不高！接待能力不足，有待提高……",
            img: [
              "images/b1545cc0bda1c402.jpg_228x168_cc2ed66c.jpg",
              "images/3c35a3062c85fe02.jpg_228x168_cd544efa.jpg",
              "images/fdc8eef625c68b02.jpg_228x168_53db5d0c.jpg"
            ]
          }
        ],
        [
            {
            grade: 5,
            time: "r*6  2019-05-10",
            comment:
              "第一次带宝宝短途游选择了芜湖大白鲸海洋乐园，事实证明我的选择是明智的，不虚此行！工作人员很热情，互动表演很惊喜，棒棒哒！",
            img: [
              "images/30d2c41991a8cd02.jpg_228x168_ed328bb6.jpg",
              "images/12127162e8740b02.jpg_228x168_de75bf04.jpg",
              "images/fb4d7b73e67da802.jpg_228x168_dd136c66.jpg"
            ]
          },
          {
            grade: 5,
            time: "v*3  2018-08-27",
            comment:
              "里面适合小朋友玩，童梦乐园外面的游乐设备免费的，不过取票特别累，进园没有任何秩序，问服务人员爱理不理",
            img: [
              "images/40e7982015936c02.jpg_228x168_f6a6432f.jpg",
              "images/ef44378753898c02.jpg_228x168_a3298df4.jpg",
              "images/47e73a42a1d63902.jpg_228x168_6ed5b160.jpg"
            ]
          },
        ]
      ]
    };
  },
  methods: {
    getClick(index) {
      if (!this.flag) {
        this.$refs.flag[index].innerHTML = this.getChat[1];
        this.$refs.content[index].style.height = "auto";
      } else {
        this.$refs.flag[index].innerHTML = this.getChat[0];
        this.$refs.content[index].style.height = "82px";
      }
      this.flag = !this.flag;
    }
  }
};
</script>

<style lang="less" scoped>
.s-chat {
  background-color: #fff;
  h3 {
    font-weight: 100;
    margin: 0;
    padding: 10px 0;
    font-size: 20px;
  }
  li {
    padding: 10px 5px;
    border-top: 1px solid #e9e9e9;
    div {
      display: flex;
      justify-content: space-between;
      span {
        font-size: 14px;
      }
    }
    p {
      overflow: hidden;
      font-size: 16px;
      height: 82px;
    }
    .all {
      display: block;
      font-size: 14px;
      padding: 5px 0;
      margin-top: 10px;
      background-color: #40ab7f;
      text-align: center;
    }
    .img{
        display: flex;
        flex-wrap:wrap;
        margin-top:10px;
        justify-content: space-between;
        align-items:space-around;
        img{
            display: block;
            width: 120px;
            height: 88px;
        }
    }
  }
}
</style>