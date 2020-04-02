<template>
    <div class="globe" ref="globe">
        
    </div>
</template>

<script>
import option from '@/option/globe'
export default {
    name:"globe",
    mounted(){
        var ele = this.$refs.globe;
        var myChart = this.echarts.init(ele);
        myChart.setOption(option);
    }
}
</script>

<style lang="less" scoped>
    .globe{
        height: 850px;
    }
</style>