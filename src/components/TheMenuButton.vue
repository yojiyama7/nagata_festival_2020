<template>
  <div class="box" :class="classObject" @click="toggleMenu()">
    <div class="box-inner" :class="classObject">
      <div class="bar bar-1" :class="classObject"></div>
      <div class="bar bar-2" :class="classObject"></div>
      <div class="bar bar-3" :class="classObject"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isMenuOpen: Boolean,
    toggleMenu: Function
  },
  data: function () {
    return {
    }
  },
  computed: {
    classObject: function () {
      return {
        'menu-open': this.isMenuOpen
      }
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
$trans-speed: 250ms;

$box-size: 64px;
.box {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 20px;
  right: 20px;
  height: $box-size;
  width: $box-size;
  border-radius: $box-size/2;
  background-color: $indigo;
  filter: drop-shadow(4px 4px 8px $black);
  @include pc {
    top: 40px;
    right: 40px;
    height: $box-size*1.4;
    width: $box-size*1.4;
    border-radius: $box-size/2*1.4;
  }
  &-inner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: $box-size * 0.5;
    width: $box-size * 0.56;
    // background-color: red;
    transition-duration: $trans-speed;
    @include pc {
      height: $box-size * 0.5 *1.4;
      width: $box-size * 0.56 *1.4;
    }
  }
}

$bar-height: 6px;
.bar {
  height: $bar-height;
  width: 100%;
  border-radius: $bar-height/2;
  // width: $box-inner-size;
  background-color: $white;
  transform-origin: $bar-height/2 center 0;
  transition-duration: $trans-speed;
}

.menu-open {
  &.box-inner {
    width: $box-size * 0.5;
    @include pc {
      width: $box-size * 0.5 *1.4;
    }
  }
  &.bar-1 {
    transform: rotate(45deg);
    width: ($box-size*0.5 - $bar-height)*1.414 + $bar-height;
    @include pc {
      width: (($box-size*0.5 - $bar-height)*1.414 + $bar-height) *1.4;
    }
  }
  &.bar-2 {
    transition-duration: $trans-speed*0.8;
    width: 0px;
  }
  &.bar-3 {
    transform: rotate(-45deg);
    width: ($box-size*0.5 - $bar-height)*1.41421356 + $bar-height;
    @include pc {
      width: (($box-size*0.5 - $bar-height)*1.41421356 + $bar-height) *1.4;
    }
  }
}

</style>
