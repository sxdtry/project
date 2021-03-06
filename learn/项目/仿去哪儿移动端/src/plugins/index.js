import Vue from 'vue';
import { Button, NavBar,Grid, GridItem,Image,Lazyload,Card,Tag,Rate,Search,DropdownMenu, DropdownItem,Col, Row ,NoticeBar } from 'vant';
Vue.use(Button)
    .use(NavBar)
    .use(Grid)
    .use(GridItem)
    .use(Image)
    .use(Card)
    .use(Tag)
    .use(Rate)
    .use(Search)
    .use(DropdownMenu)
    .use(DropdownItem)
    .use(Col)
    .use(Row)
    .use(NoticeBar )
    .use(Lazyload,{lazyComponent: true})