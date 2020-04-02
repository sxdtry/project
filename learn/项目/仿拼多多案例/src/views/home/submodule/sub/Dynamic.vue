<template>
    <div class="dynamic">
        <van-grid :column-num="5" clickable :border="false">
            <van-grid-item
                v-for="(item,index) in frock"
                :key="index"
                :icon="item.img"
                :text="item.text"
            />
        </van-grid>

        <div class="title">
            <img src="//t00img.yangkeduo.com/goods/images/2019-08-01/5ba3dd3862a2e28f1f4b1393be5c6619.png?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp" />
        </div>

        <card />
    </div>
</template>

<script>
export default {
    name:"dunamic",
    data(){
        return {
            frock:[
                {img:"//t14img.yangkeduo.com/images/2019-05-01/7935a5cd7d8b2237ddc00f9521c9be29.png?imageMogr2/sharpen/1%7CimageView2/2/w/108/q/70/format/webp",text:"秋冬新品"},
                {img:"//t14img.yangkeduo.com/images/2019-05-01/7935a5cd7d8b2237ddc00f9521c9be29.png?imageMogr2/sharpen/1%7CimageView2/2/w/108/q/70/format/webp",text:"秋冬新品"},
                {img:"//t14img.yangkeduo.com/images/2019-05-01/7935a5cd7d8b2237ddc00f9521c9be29.png?imageMogr2/sharpen/1%7CimageView2/2/w/108/q/70/format/webp",text:"秋冬新品"},
                {img:"//t14img.yangkeduo.com/images/2019-05-01/7935a5cd7d8b2237ddc00f9521c9be29.png?imageMogr2/sharpen/1%7CimageView2/2/w/108/q/70/format/webp",text:"秋冬新品"},
                {img:"//t14img.yangkeduo.com/images/2019-05-01/7935a5cd7d8b2237ddc00f9521c9be29.png?imageMogr2/sharpen/1%7CimageView2/2/w/108/q/70/format/webp",text:"秋冬新品"},
                {img:"//t14img.yangkeduo.com/images/2019-05-01/7935a5cd7d8b2237ddc00f9521c9be29.png?imageMogr2/sharpen/1%7CimageView2/2/w/108/q/70/format/webp",text:"秋冬新品"},
                {img:"//t14img.yangkeduo.com/images/2019-05-01/7935a5cd7d8b2237ddc00f9521c9be29.png?imageMogr2/sharpen/1%7CimageView2/2/w/108/q/70/format/webp",text:"秋冬新品"},
                {img:"//t14img.yangkeduo.com/images/2019-05-01/7935a5cd7d8b2237ddc00f9521c9be29.png?imageMogr2/sharpen/1%7CimageView2/2/w/108/q/70/format/webp",text:"秋冬新品"},
                {img:"//t14img.yangkeduo.com/images/2019-05-01/7935a5cd7d8b2237ddc00f9521c9be29.png?imageMogr2/sharpen/1%7CimageView2/2/w/108/q/70/format/webp",text:"秋冬新品"},
                {img:"ellipsis",text:"查看全部"},
            ],
            
        }
    }
}
</script>

<style lang="less" scoped>
.title img{
    width:100%;
}

</style>