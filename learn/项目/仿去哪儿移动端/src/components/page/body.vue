<template>
    <div class="s-body">
        <s-grid />
        <s-hot />
        <s-like />
        <s-go/>
    </div>
</template>

<script>
import sGrid from "./body/grid"
import sHot from "./body/hot"
import sLike from "./body/like"
import sGo from "./body/go"
export default {
    name:"s-body",
    components:{
        sGrid,
        sHot,
        sLike,
        sGo
    }
}
</script>