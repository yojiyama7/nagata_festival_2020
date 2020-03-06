<template>
  <div class="box" :class="classObject">
    <div class="box-inner">
      <BaseHeading
      :text="'Menu'"
      />
      <div class="menu-list">
        <ul class="list">
          <li class="menu-item"
          v-for="(item, i) in items1"
          :key="i"
          >
            {{ item }}
          </li>
        </ul>

        <ul class="list">
          <li class="menu-item"
          v-for="(item, i) in items2"
          :key="i"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isMenuOpen: Boolean
  },
  data: function () {
    return {
      items1: [
        'ホーム',
        'スタッフ'
      ],
      items2: [
        '一般祭_______校内祭',
        '地図',
        '模擬店・展示',
        'ステージ'
      ]
    }
  },
  computed: {
    classObject: function () {
      return {
        'menu-open': this.isMenuOpen
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// to be component
.list {
  width: 100%;
  border-radius: 4px;
  background-color: $indigo;
  color: $white;
}

.menu {
  &-list {
    margin-top: 24px;
  }
  &-item {
    font-size: 24px;
    padding: 24px;
    &:not(:first-child) {
      border-top: solid 2px $white;
    }
  }
}
.list {
  &:not(:first-child) {
    margin-top: 32px;
  }
}

.box {
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  // display: fixed;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: $white;
  clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
  transition-duration: 400ms;
  &-inner {
    width: $container-width;
    height: 90%;
  }
}

.menu-open {
  clip-path: polygon(100% 0, 0 0, 0 100%, 100% 100%);
}
</style>
