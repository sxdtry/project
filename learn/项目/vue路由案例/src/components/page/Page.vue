<template>
    <div class="page">
        <div class="left">
            <ul>
                <li><router-link :to="{name:'solarsystem'}">太阳系</router-link></li>
                <li><router-link :to="{name:'fountain'}">字母喷泉</router-link></li>
                <li><router-link :to="{name:'linecharts'}">折线图</router-link></li>
                <li><router-link :to="{name:'asahi'}">旭日图</router-link></li>
                <li><router-link :to="{name:'gauge'}">仪表盘</router-link></li>
                <li><router-link :to="{name:'pictorialBar'}">象形柱图</router-link></li>
                <li><router-link :to="{name:'globe'}">3d地球</router-link></li>
                <li><router-link :to="{name:'music'}">3d音乐</router-link></li>
            </ul>
        </div>
        <div class="right">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name:"page"
}
</script>

<style lang="less" scope>
    .page{
        display: flex;
        width: 100%;
        height: 100%;
    }
    .left{
        flex:3;
        background-color: pink;
        a{
            display: block;
            // background-color: #0f0;
            font-size:18px;
            text-align:center;
            margin:20px 0;
            &:hover{
                background-color:aqua
            }
        }
    }
    .right{
        flex:10;
        // background-color: orange;
    }
</style>