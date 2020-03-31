<template>
  <div class="box">
    <div class="box-inner">
      <BaseHeading2 :text="'test heading'"/>
      <BaseTitleAndDesc />
      <BaseTitleAndDesc />
      <!-- hafwanoe -->
      <div class="big-box"></div>
    </div>
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

.box {
  &-inner {
    margin: 48px auto 0;
    @include container-width;
  }
}
</style>
