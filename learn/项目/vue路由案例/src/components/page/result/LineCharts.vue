<template>
    <div ref="line" class="line-charts">
        
    </div>
</template>

<script>
import option from "@/option/line.js"
export default {
    name:"LineCharts",
    mounted() {
        var line = this.$refs.line
        var myChart = this.echarts.init(line);
        // // 绘制图表
        myChart.setOption(option)
    },
}
</script>

<style lang="less">
    .line-charts{
        height: 850px;
    }
</style>