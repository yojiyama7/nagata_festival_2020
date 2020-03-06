<template>
  <h2 class="heading">
    <!-- 変数ではなく、html的に内包している文字列がこの部分に代入されてほしい -->
    {{ text }}
  </h2>
</template>

<script>
export default {
  props: {
    text: String
  }
}
</script>

<style lang="scss" scoped>
$heading-font-size: 72px;
.heading {
  font-size: $heading-font-size;
  font-weight: 700;
  position: relative;
  color: $indigo;
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
  }
}
</style>
