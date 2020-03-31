<template>
  <div class="box">
    <span>{{ time1[0] }}</span>:<span>{{ time1[1] }}</span>
    ~
    <span>{{ time2[0] }}</span>:<span>{{ time2[1] }}</span>
  </div>
</template>

<script>
export default {
  props: {
    time1: Array,
    time2: Array
  }
}
</script>

<style lang="scss" scoped>
.box {
  font-size: 28px;
  @include pc {
    font-size: 36px;
  }
}
</style>
