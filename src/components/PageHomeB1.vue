<template>
  <div class="box">
    <div></div>
    <div class="box-inner">
      <BaseHeading
      :text="'B-1'"
      />
      <div class="desc">
        <div class="desc-top">
          <p>今年も開催します、</p>
          <p class="desc-top-title">B(文化祭)-1 グランプリ！</p>
        </div>
        <div class="desc-bottom">
          <p>
            <!-- クリックしたら拡大か、地図のページに飛ばされる -->
            <img class="desc-bottom-img" src="../assets/polling_place_map.svg">
            説明とか投票所とかとかとかとかとかとかとかとかとかとかとかとかとかとか、とかとかとかとか、とかとかとか、とかとかとかとか、とかとかとか、とかとかとかとか、とかとかとか、とかとかとかとか、とかとかとか、
          </p>
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

.desc {
  margin-top: 48px;
  font-size: 20px;
  @include pc {
    margin-top: 72px;
    font-size: 28px;
  }
  &-top {
    &-title {
      display: inline-block;
      margin-top: 16px;
      font-size: 28px;
      border-bottom: 6px solid $vermilion;
      @include pc {
        font-size: 44px;
      }
    }
  }
  &-bottom {
    margin-top: 36px;
    line-height: 1.8em;
    @include pc {
      margin-top: 48px;
    }
    &-img {
      padding: 16px;
      float: right;
      height: 5.6em;
      @include pc {
        width: 24%;
        height: 20%;
      }
    }
  }
}
</style>
