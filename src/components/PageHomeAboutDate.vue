<template>
  <div class="box">
    <span class="part number">
      {{ month }}
    </span>
    <span class="part">
      月
    </span>
    <span class="part number">
      {{ day }}
    </span>
    <span class="part">
      日
    </span>
    <span class="part bracket">(</span><span class="part">{{ weekday }}</span><span class="part bracket">)</span>
  </div>
</template>

<script>
export default {
  props: {
    month: String,
    day: String,
    weekday: String
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
.part {
  display: inline-block;
  vertical-align: middle;
}
.number {
  font-size: 1.4em;
  // font-weight: 500;
}
.bracket {
  font-size: 1.2em;
}
</style>
