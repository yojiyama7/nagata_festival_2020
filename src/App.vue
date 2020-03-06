<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <TheMenu />
    <router-view/>
  </div>
</template>

<script>
import 'reset.css'
import TheMenu from './components/TheMenu'

export default {
  name: 'App',
  components: {
    TheMenu
  }
}
</script>

<style lang="scss">
// このノーマライズを許すかどうか
@import url(https://use.typekit.net/fwl1btk.css);

#app {
  // aaux-next 追加
  font-family: 'aaux-next', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  // margin-top: 60px;
}
</style>
