<template>
  <div class="box">
    <div class="box-inner">
      <p class="text">
        {{ text }}
      </p>
      <div class="bubble-list">
        <div class="bubble bubble-1"></div>
        <div class="bubble bubble-2"></div>
        <div class="bubble bubble-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: String
  }
}
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  align-items: center;
  height: 56px;
  font-size: 32px;
  &-inner {
    display: flex;
    align-items: center;
    position: relative;
    padding-right: 16px;
    height: 100%;
    background-color: $lime;
    border-radius: 0px 8px 8px 0px;
    &:before {
      content: "";
      position: absolute;
      top: 0px;
      right: 100%;
      width: 1000px;
      height: 100%;
      background-color: $lime;
    }
  }
}

.text {
  font-weight: 700;
  color: $white;
}

.bubble {
  position: absolute;
  border-radius: 50%;
  background-color: $lime;
  &-list {
    position: relative;
    height: 100%;
  }
  &-1 {
    top: 10px;
    left: 36px;
    height: 36px;
    width: 36px;
  }
  &-2 {
    top: 4px;
    left: 84px;
    height: 24px;
    width: 24px;
  }
  &-3 {
    top: -10px;
    left: 116px;
    height: 12px;
    width: 12px;
  }
}
</style>
