<template>
    <div class="gauge" ref="gauge"></div>
</template>

<script>
import option from '@/option/gauge.js'
export default {
    name:'gauge',
    mounted(){
        const ele = this.$refs.gauge
        var myChart = this.echarts.init(ele);
        setInterval(function () {
            option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
        myChart.setOption(option, true);
},2000);
    }
}
</script>

<style lang="less" scoped>
    .gauge{
        height: 650px;
    }
</style>