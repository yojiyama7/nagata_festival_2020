<template>
  <div class="box">
    <div class="box-inner">
      <!-- a -->
      <img class="logo" src='../assets/logo.svg'>
      <img class="logo-text" src='../assets/logo_text.svg'>
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
    @include container-width;
    @include pc {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      flex-direction: row-reverse;
      // align-items: center;
    }
  }
}

.logo {
  @include pc {
    width: 36%;
  }
  &-text {
    @include pc {
      width: 64%;
    }
  }
}
</style>
