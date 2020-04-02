<template>
  <div id="app">
    <router-view />
    <Tabber />
  </div>
</template>

<script>
import Tabber from './components/Tabbar'

export default {
  name:"app",
  components:{
    Tabber
  }
}
</script>

<style lang="less">
</style>
