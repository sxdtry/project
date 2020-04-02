<template>
    <div class="card">
        <div class="shop-card">
            <div class="card" v-for="(item,index) in card" :key="index" @click="handleClick(index)">
                <img :src="item.img" />
                <h4>{{item.title}}</h4>
                <p class="refund">急速退款</p>
                <p class="price"><span>￥{{item.price}}</span>目前已拼<span class="current">{{item.num}}</span>件</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"card",
    data(){
        return {
            card:[
                {title:"【厂家直销】秋季复古改良丝绒旗袍连衣裙女大码妈妈装旗袍中长款",price:"29.76",img:"https://t00img.yangkeduo.com/goods/images/2019-09-12/0137339b05e45d8d2759d90d673f1205.jpeg?imageMogr2/sharpen/50/strip%7CimageView2/2/w/400/q/80/format/webp",num:"2000"},
                {title:"【厂家直销】秋季复古改良丝绒旗袍连衣裙女大码妈妈装旗袍中长款",price:"29.76",img:"https://t00img.yangkeduo.com/goods/images/2019-09-12/0137339b05e45d8d2759d90d673f1205.jpeg?imageMogr2/sharpen/50/strip%7CimageView2/2/w/400/q/80/format/webp",num:"2000"},
                {title:"【厂家直销】秋季复古改良丝绒旗袍连衣裙女大码妈妈装旗袍中长款",price:"29.76",img:"https://t00img.yangkeduo.com/goods/images/2019-09-12/0137339b05e45d8d2759d90d673f1205.jpeg?imageMogr2/sharpen/50/strip%7CimageView2/2/w/400/q/80/format/webp",num:"2000"},
                {title:"【厂家直销】秋季复古改良丝绒旗袍连衣裙女大码妈妈装旗袍中长款",price:"29.76",img:"https://t00img.yangkeduo.com/goods/images/2019-09-12/0137339b05e45d8d2759d90d673f1205.jpeg?imageMogr2/sharpen/50/strip%7CimageView2/2/w/400/q/80/format/webp",num:"2000"},
                {title:"【厂家直销】秋季复古改良丝绒旗袍连衣裙女大码妈妈装旗袍中长款",price:"29.76",img:"https://t00img.yangkeduo.com/goods/images/2019-09-12/0137339b05e45d8d2759d90d673f1205.jpeg?imageMogr2/sharpen/50/strip%7CimageView2/2/w/400/q/80/format/webp",num:"2000"},
                {title:"【厂家直销】秋季复古改良丝绒旗袍连衣裙女大码妈妈装旗袍中长款",price:"29.76",img:"https://t00img.yangkeduo.com/goods/images/2019-09-12/0137339b05e45d8d2759d90d673f1205.jpeg?imageMogr2/sharpen/50/strip%7CimageView2/2/w/400/q/80/format/webp",num:"2000"},
                {title:"【厂家直销】秋季复古改良丝绒旗袍连衣裙女大码妈妈装旗袍中长款",price:"29.76",img:"https://t00img.yangkeduo.com/goods/images/2019-09-12/0137339b05e45d8d2759d90d673f1205.jpeg?imageMogr2/sharpen/50/strip%7CimageView2/2/w/400/q/80/format/webp",num:"2000"},
                {title:"【厂家直销】秋季复古改良丝绒旗袍连衣裙女大码妈妈装旗袍中长款",price:"29.76",img:"https://t00img.yangkeduo.com/goods/images/2019-09-12/0137339b05e45d8d2759d90d673f1205.jpeg?imageMogr2/sharpen/50/strip%7CimageView2/2/w/400/q/80/format/webp",num:"2000"},
                {title:"【厂家直销】秋季复古改良丝绒旗袍连衣裙女大码妈妈装旗袍中长款",price:"29.76",img:"https://t00img.yangkeduo.com/goods/images/2019-09-12/0137339b05e45d8d2759d90d673f1205.jpeg?imageMogr2/sharpen/50/strip%7CimageView2/2/w/400/q/80/format/webp",num:"2000"},
                {title:"【厂家直销】秋季复古改良丝绒旗袍连衣裙女大码妈妈装旗袍中长款",price:"29.76",img:"https://t00img.yangkeduo.com/goods/images/2019-09-12/0137339b05e45d8d2759d90d673f1205.jpeg?imageMogr2/sharpen/50/strip%7CimageView2/2/w/400/q/80/format/webp",num:"2000"},
            ]
        }
    },
    methods:{
        handleClick(index){
            this.$router.push({name:"particulars",params:{id:index}});
            this.$store.state.data = this.card[index]
            this.$store.commit("show")
        }
    }
}
</script>

<style lang="less" scoped>
.shop-card{
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    background-color: #eee;
    .card{
        width: 49.5%;
        background-color: #fff;
        margin-bottom:5px;
        font-size:25px;
        font-weight:normal;
        img{
            display: block;
            width: 100%;
        }
        h4{
            margin:10px 0;
        }
        .refund{
            color: #f5655b;
        }
        .price{
            color:#58595b;
            span:first-child{
                color: #e02e44;
                font-size:30px;
                font-weight: bold;
                margin-right:20px;
            }
        }
    }
}
</style>