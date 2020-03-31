<template>
  <div class="heading">
    <!-- 変数ではなく、html的に内包している文字列がこの部分に代入されてほしい -->
    <h2>{{ text }}</h2>
    <span class="sub-text">{{ subText }}</span>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    subText: String
  }
}
</script>

<style lang="scss" scoped>
$heading-font-size: 72px;
$pc: 1.5;
.heading {
  display: flex;
  align-items: baseline;
  font-size: $heading-font-size;
  font-weight: 700;
  position: relative;
  color: $indigo;
  @include pc {
    font-size: $heading-font-size*$pc;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 100%;
    display: inline-block;
    margin: $heading-font-size*0.16 16px;
    height: $heading-font-size*0.68;
    width: 800px;
    border-radius: 4px;
    background-color: $indigo;
    @include pc {
      margin: $heading-font-size*0.16*$pc 16px*$pc;
      height: $heading-font-size*0.68*$pc;
      border-radius: 4*$pc;
    }
  }
}

.sub-text {
  margin-left: 24px;
  font-size: 24px;
}
</style>
