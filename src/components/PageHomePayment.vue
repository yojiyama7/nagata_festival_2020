<template>
  <div class="box">
    <div class="box-inner">
      <BaseHeading
      :text="'Payment'"
      />
      <div>
        <div class="text">
          <p>文化祭での支払いは、全て金券で行います。</p>
          <p>or</p>
          <p>文化祭での支払いは、金券かPayPayで行います。</p>
        </div>
        <div class="text">
          <p>下に説明とか</p>
        </div>
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

.text {
  margin-top: 48px;
  font-size: 20px;
  line-height: 1.8em;
  @include pc {
    font-size: 28px;
  }
  &:not(:first-child) {
    margin-top: 24px;
  }
}
</style>
