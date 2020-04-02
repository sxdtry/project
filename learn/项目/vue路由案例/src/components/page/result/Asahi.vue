<template>
  <div ref="asahi" class="asahi-chart"></div>
</template>
<script>
import option from "@/option/asahi.js";
export default {
  name: "asahi",
  mounted() {
    var asahi = this.$refs.asahi;
    var myChart = this.echarts.init(asahi);
    // // 绘制旭日图
    myChart.setOption(option);
  }
};
</script>

<style leng="less">
.asahi-chart{
    height: 875px;
}
</style>