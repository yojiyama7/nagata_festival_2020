<template>
  <div class="box">
    <div class="box-inner">
      <BaseHeading
      :text="'Theme Song'"
      />
      <div class="video">
        <iframe class="video-inner" src="https://www.youtube.com/embed/_UPudzVh5o8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.box {
  &-inner {
    margin: 96px auto 0;
    @include container-width;
    @include pc {
      margin: 152px auto 0;
    }
  }
}

$border-size: 12px;
.video {
  position: relative;
  margin-top: 48px;
  height: $container-width * 0.5625;
  width: $container-width;
  @include pc {
    margin-top: 88px;
    height: $container-width-pc * 0.5625;
    width: $container-width-pc;
  }
  &-inner {
    height: 100%;
    width: 100%;
  }
  &:after {
    content: "";
    position: absolute;
    top: -$border-size;
    left: -$border-size;
    display: block;
    z-index: -10;
    height: 100%;
    width: 100%;
    border: $border-size solid $lime;
    border-radius: $border-size;
  }
}
</style>
