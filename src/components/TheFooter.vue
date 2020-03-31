<template>
  <div class="box">
    <div class="box-inner">
      <div class="logo-top">
        <div class="logo-top-list">
          <img class="logo-top-text" src="../assets/logo_text_mono.svg">
          <img class="logo-top-img" src="../assets/logo_mono.svg">
        </div>
        <p class="logo-bottom">2020 Nagata High School Festicval</p>
      </div>
      <p class="copyright">Copyright © 長田高校文化祭スタッフ All Rights Reserved.</p>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.box {
  overflow: hidden;
  margin-top: 132px;
  background-color: $gray;
  &-inner {
    margin: 32px auto 40px;
    @include pc {
      // margin: 96px auto 120px;
    }
    @include container-width;
  }
}

.logo {
  &-top {
    &-list {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      // flex-direction: row;
      // flex-direction: ;
      @include pc {
        margin-left: 28%;
        width: 72%;
      }
    }
    &-text {
      width: 72%;
    }
    &-img {
      width: 24%;
    }
  }
  &-bottom {
    margin-top: 8px;
    font-size: 21px;
    font-weight: 700;
    color: $white;
    @include pc {
      margin-top: 24px;
      text-align: right;
      font-size: 40px;
    }
  }
}

.copyright {
  margin-top: 16px;
  font-size: 12px;
  font-weight: 700;
  color: $white;
  @include pc {
    margin-top: 32px;
    text-align: right;
    font-size: 16px;
  }
}
</style>
