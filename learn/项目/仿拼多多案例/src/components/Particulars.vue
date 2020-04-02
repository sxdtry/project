<template>
    <div class="particulars">
        <van-nav-bar
            title="详情介绍"
            left-text="返回"
            left-arrow
            flex
            :border="false"
            @click-left="onClickLeft"
        />
        <van-swipe class="my-swipe" :autoplay="3000" touchable height="370" :show-indicators="false">
            <van-swipe-item v-for="(item,index) in img" :key="index" @click="handleClick(index)">
                <img :src="item" />
            </van-swipe-item>
        </van-swipe>

        <h3>{{date.title}}</h3>
        <div class="price-container">
            <span class="price">￥{{date.price}}</span>
            <span class="current">已拼{{date.num}}件</span>
        </div>

        <van-stepper v-model="value" integer />

        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
            <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
            <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" />
            <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
        </van-goods-action>
    </div>
</template>

<script>
import { ImagePreview } from 'vant'
import { Toast } from 'vant'
export default {
    name:"parriculars",
    data(){
        return {
            flag:true,
            img:[
                "//t00img.yangkeduo.com/goods/images/2019-09-12/0687330c-be7a-4012-8197-a2f188985a2a.jpg",
                "//t00img.yangkeduo.com/goods/images/images/2019-09-12/f91696c0-02fe-4cc8-99d9-65d19d8a9535.jpg",
                "//t00img.yangkeduo.com/goods/images/2019-09-12/3fe36bcf-c654-4d77-a072-fe13c71ca72c.jpg",
                "//t00img.yangkeduo.com/goods/images/2019-11-01/2718ba14ddf9adb025c22adc2c87dded.jpeg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
                "//t00img.yangkeduo.com/goods/images/2019-12-22/c650d1806645ae09f5a0f759fadd7100.jpeg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
                "//t00img.yangkeduo.com/goods/images/2019-10-28/56228e315aa1da83f760a4fd41292daa.jpeg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
                "//t00img.yangkeduo.com/goods/images/2019-08-23/949b2b4627bdf5d47cf03eac4ce79302.jpeg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
                "//t00img.yangkeduo.com/goods/images/2020-01-10/da0717f0fd1e65ccd1a9950ff8269f48.jpeg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
                "//t00img.yangkeduo.com/goods/images/2019-10-29/46d781ff95e1133802a7a3bba5fbada8.jpeg?imageMogr2/strip%7CimageView2/2/w/1300/q/80"
            ],
            date:"",
            value:1
        }
    },
    methods:{
        onClickLeft(){
            history.go(-1)
            this.$store.commit('show')
        },
        handleClick(index){
            ImagePreview({
                images: this.img
            })
        },
        onClickIcon() {
            Toast('点击图标');
        },
        onClickButton() {
            Toast('点击按钮');
        }
    },
    created(){
        this.date = this.$store.state.data
    }
}
</script>

<style lang="less" scoped>
.my-swipe img{
    width:100%;
    height:100%;
}
h3{
    font-size:30px;
}
.price-container{
    display:flex;
    justify-content:space-between;
    align-items:center;
    .price{
        font-size:50px;
        color:#f00;
    }
    .current{
        font-size:25px;
        color:#555;
    }
}
.van-stepper{
    text-align:right;
}
</style>