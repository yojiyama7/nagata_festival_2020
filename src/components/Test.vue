<template>
  <div>
    <TheMenu />
    aaa
    <div class="big-box"></div>
  </div>
</template>

<script>
import TheMenu from './TheMenu'

export default {
  components: {
    TheMenu
  }
}
</script>

<style lang='scss' scoped>
.big-box {
  height: 4000px;
}
</style>
