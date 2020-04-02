<template>
    <div class="recommend">
        <h3>热门分类</h3>
        <van-grid
            :column-num="3"
            center
            clickable
            :icon-size="60"
        >
            <van-grid-item
            v-for="(item,index) in list"
                :key="index"
                :icon="item.img"
                :text="item.text"
            />
        </van-grid>
    </div>
</template>

<script>
export default {
    name:"recommend",
    data(){
        return {
            list:[
                {img:"https://t00img.yangkeduo.com/goods/images/2019-09-12/eb045c37-d588-48e6-93a1-db220ed744a1.jpg",text:"旗袍汉服"},
                {img:"https://t00img.yangkeduo.com/goods/images/2019-09-12/eb045c37-d588-48e6-93a1-db220ed744a1.jpg",text:"旗袍汉服"},
                {img:"https://t00img.yangkeduo.com/goods/images/2019-09-12/eb045c37-d588-48e6-93a1-db220ed744a1.jpg",text:"旗袍汉服"},
                {img:"https://t00img.yangkeduo.com/goods/images/2019-09-12/eb045c37-d588-48e6-93a1-db220ed744a1.jpg",text:"旗袍汉服"},
                {img:"https://t00img.yangkeduo.com/goods/images/2019-09-12/eb045c37-d588-48e6-93a1-db220ed744a1.jpg",text:"旗袍汉服"},
                {img:"https://t00img.yangkeduo.com/goods/images/2019-09-12/eb045c37-d588-48e6-93a1-db220ed744a1.jpg",text:"旗袍汉服"},
                {img:"https://t00img.yangkeduo.com/goods/images/2019-09-12/eb045c37-d588-48e6-93a1-db220ed744a1.jpg",text:"旗袍汉服"},
                {img:"https://t00img.yangkeduo.com/goods/images/2019-09-12/eb045c37-d588-48e6-93a1-db220ed744a1.jpg",text:"旗袍汉服"},
                {img:"https://t00img.yangkeduo.com/goods/images/2019-09-12/eb045c37-d588-48e6-93a1-db220ed744a1.jpg",text:"旗袍汉服"},
                {img:"https://t00img.yangkeduo.com/goods/images/2019-09-12/eb045c37-d588-48e6-93a1-db220ed744a1.jpg",text:"旗袍汉服"},
                {img:"https://t00img.yangkeduo.com/goods/images/2019-09-12/eb045c37-d588-48e6-93a1-db220ed744a1.jpg",text:"旗袍汉服"},
                {img:"https://t00img.yangkeduo.com/goods/images/2019-09-12/eb045c37-d588-48e6-93a1-db220ed744a1.jpg",text:"旗袍汉服"},
                {img:"https://t00img.yangkeduo.com/goods/images/2019-09-12/eb045c37-d588-48e6-93a1-db220ed744a1.jpg",text:"旗袍汉服"},
                {img:"https://t00img.yangkeduo.com/goods/images/2019-09-12/eb045c37-d588-48e6-93a1-db220ed744a1.jpg",text:"旗袍汉服"},
                {img:"https://t00img.yangkeduo.com/goods/images/2019-09-12/eb045c37-d588-48e6-93a1-db220ed744a1.jpg",text:"旗袍汉服"},
                {img:"https://t00img.yangkeduo.com/goods/images/2019-09-12/eb045c37-d588-48e6-93a1-db220ed744a1.jpg",text:"旗袍汉服"},
                {img:"https://t00img.yangkeduo.com/goods/images/2019-09-12/eb045c37-d588-48e6-93a1-db220ed744a1.jpg",text:"旗袍汉服"},
                {img:"https://t00img.yangkeduo.com/goods/images/2019-09-12/eb045c37-d588-48e6-93a1-db220ed744a1.jpg",text:"旗袍汉服"},
                {img:"https://t00img.yangkeduo.com/goods/images/2019-09-12/eb045c37-d588-48e6-93a1-db220ed744a1.jpg",text:"旗袍汉服"},
                {img:"https://t00img.yangkeduo.com/goods/images/2019-09-12/eb045c37-d588-48e6-93a1-db220ed744a1.jpg",text:"旗袍汉服"},
                {img:"https://t00img.yangkeduo.com/goods/images/2019-09-12/eb045c37-d588-48e6-93a1-db220ed744a1.jpg",text:"旗袍汉服"},
                {img:"https://t00img.yangkeduo.com/goods/images/2019-09-12/eb045c37-d588-48e6-93a1-db220ed744a1.jpg",text:"旗袍汉服"},
                {img:"https://t00img.yangkeduo.com/goods/images/2019-09-12/eb045c37-d588-48e6-93a1-db220ed744a1.jpg",text:"旗袍汉服"},
                {img:"https://t00img.yangkeduo.com/goods/images/2019-09-12/eb045c37-d588-48e6-93a1-db220ed744a1.jpg",text:"旗袍汉服"},
                {img:"https://t00img.yangkeduo.com/goods/images/2019-09-12/eb045c37-d588-48e6-93a1-db220ed744a1.jpg",text:"旗袍汉服"},
                {img:"https://t00img.yangkeduo.com/goods/images/2019-09-12/eb045c37-d588-48e6-93a1-db220ed744a1.jpg",text:"旗袍汉服"},
                {img:"https://t00img.yangkeduo.com/goods/images/2019-09-12/eb045c37-d588-48e6-93a1-db220ed744a1.jpg",text:"旗袍汉服"},
                {img:"https://t00img.yangkeduo.com/goods/images/2019-09-12/eb045c37-d588-48e6-93a1-db220ed744a1.jpg",text:"旗袍汉服"},
                {img:"https://t00img.yangkeduo.com/goods/images/2019-09-12/eb045c37-d588-48e6-93a1-db220ed744a1.jpg",text:"旗袍汉服"},
                {img:"https://t00img.yangkeduo.com/goods/images/2019-09-12/eb045c37-d588-48e6-93a1-db220ed744a1.jpg",text:"旗袍汉服"},
                {img:"https://t00img.yangkeduo.com/goods/images/2019-09-12/eb045c37-d588-48e6-93a1-db220ed744a1.jpg",text:"旗袍汉服"},
                {img:"https://t00img.yangkeduo.com/goods/images/2019-09-12/eb045c37-d588-48e6-93a1-db220ed744a1.jpg",text:"旗袍汉服"},
                {img:"https://t00img.yangkeduo.com/goods/images/2019-09-12/eb045c37-d588-48e6-93a1-db220ed744a1.jpg",text:"旗袍汉服"},
                {img:"https://t00img.yangkeduo.com/goods/images/2019-09-12/eb045c37-d588-48e6-93a1-db220ed744a1.jpg",text:"旗袍汉服"},
                {img:"https://t00img.yangkeduo.com/goods/images/2019-09-12/eb045c37-d588-48e6-93a1-db220ed744a1.jpg",text:"旗袍汉服"},
                {img:"https://t00img.yangkeduo.com/goods/images/2019-09-12/eb045c37-d588-48e6-93a1-db220ed744a1.jpg",text:"旗袍汉服"},
            ]
        }
    }
}
</script>

<style lang="less" scoped>
    h3{
        font-weight:normal;
        font-size:30px;
    }
</style>