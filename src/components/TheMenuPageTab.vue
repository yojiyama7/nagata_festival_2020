<template>
  <div>
    <div class="box-inner">
      <div class="tab">
        <div class="tab-item" :class="{ 'tab-item-selected': i === tabIndex }"
        v-for="(tabItem, i) in text.tab"
        :key="i"
        @click="setTabIndex(i)"
        >
          <div class="tab-item-inner">
            {{ tabItem.text }}
          </div>
        </div>
      </div>
      <div class="list" :class="['list-one', 'list-two'][tabIndex]">
        <router-link class="list-item"
        v-for="(listItem, i) in text.list[tabIndex]" :key="i"
        :to="listItem.to"
        @click.native="toggleMenu()"
        >
          <div class="list-item-inner">
            <i class="material-icons list-item-inner-img">
              {{ listItem.icon }}
            </i>
            <p class="list-item-inner-text">
              {{ listItem.text }}
            </p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    toggleMenu: Function
  },
  data: function () {
    return {
      text: {
        tab: [
          { text: '一般祭' },
          { text: '校内祭' }
        ],
        list: [
          [
            { text: '地図', icon: 'map', to: '/map-general' },
            { text: '模擬店 / 展示', icon: 'store', to: '/booth-general' },
            { text: 'ステージ', icon: 'mic', to: '/stage-general' }
          ],
          [
            { text: '地図(校内祭)', icon: 'map', to: '/map-student' },
            { text: '模擬店 / 展示(校内祭)', icon: 'store', to: '/booth-student' },
            { text: 'ステージ(校内祭)', icon: 'mic', to: '/stage-student' }
          ]
        ]
      },
      tabIndex: 0
    }
  },
  methods: {
    isTabIndex: function (x) {
      return (x === this.tabIndex)
    },
    setTabIndex: function (x) {
      this.tabIndex = x
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  &-inner {
    // overflow: hidden;
    // display: flex;
    // flex-direction: column;
    // height: 120px;
    border-radius: 4px;
  }
}

.tab {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 60px;
  background-color: darken($indigo, 20%);
  border-radius: 8px 8px 0px 0px;
  &-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 50%;
    color: $gray;
    border-radius: 8px 8px 0px 0px;
    &-selected {
      background-color: $indigo;
      color: $white;
    }
    &-inner {
      font-size: 24px;
      border-radius: 4px;
      // background-color: $indigo;

    }
  }
}

.list {
  // height: 120px;
  display: block;
  background-color: $indigo;
  border-radius: 0px 0px 8px 8px;
  &-one {
    border-top: 8px solid $lime;
    border-bottom: 8px solid $lime;
  }
  &-two {
    border-top: 8px solid darken($lime, 20%);
    border-bottom: 8px solid darken($lime, 20%);
  }
  &-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 72px;
    text-decoration: none;
    &:not(:first-child) {
      border-top: 2px solid $white;
    }
    &-inner {
      display: flex;
      width: 80%;
      align-items: center;
      // justify-content: center;
      &-img {
        padding: 4px;
        font-size: 36px;
        color: $indigo;
        background-color: $white;
        border-radius: 50%;
        text-decoration: none;
      }
      &-text {
        margin-left: 16px;
        font-size: 20px;
        color: $white;
        text-decoration: none;
      }
    }
  }
}
</style>
