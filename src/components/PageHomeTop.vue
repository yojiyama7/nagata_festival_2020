<template>
  <div class="box">
    <div class="box-inner">
      <!-- a -->
      <img src='../assets/logo.svg'>
      <img src='../assets/logo_text.svg'>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  // background-color: gray;
  &-inner {
    // margin: 24px auto 0;
    width: $container-width;
  }
}

</style>
