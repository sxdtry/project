<template>
    <div class="pictorialBar" ref="pictorialBar"></div>
</template>

<script>
import option from '@/option/pictorialBar.js'
export default {
    name:"pictorialBar",
    mounted(){
        var ele = this.$refs.pictorialBar;
        var myChart = this.echarts.init(ele);
        myChart.setOption(option);
    }
}
</script>

<style scoped>
    .pictorialBar{
        height: 850px;
    }
</style>