<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <TheFooter />
    <TheMenu />
  </div>
</template>

<script>
import 'reset.css'
import TheMenu from './components/TheMenu'
import TheFooter from './components/TheFooter'

export default {
  name: 'App',
  components: {
    TheMenu,
    TheFooter
  }
}
</script>

<style lang="scss">
// このノーマライズを許すかどうか
@import url(https://use.typekit.net/fwl1btk.css);
@import url(https://fonts.googleapis.com/icon?family=Material+Icons);
@import url(https://use.fontawesome.com/releases/v5.6.1/css/all.css);

#app {
  // aaux-next 追加
  font-family: 'aaux-next', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // * {
  //   box-sizing: border-box;
  // }
  // text-align: center;
  // color: #2c3e50;
  // margin-top: 60px;
}
</style>
