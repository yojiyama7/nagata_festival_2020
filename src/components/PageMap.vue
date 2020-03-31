<template>
  <div class="box">
    <div class="box-inner">
      <BaseHeading :text="'Map'" :subText="textMap.headingSubText"/>
      <div class="tab-and-list">
        <div class="tab">
          <div class="tab-item" v-for="(item, i) in textMap.tabItems" :key="i" :class="{ 'tab-item-selected': i === tabIndex }" @click="setTabIndex(i)">
            <div class="tab-item-text">
              {{ item }}
            </div>
          </div>
        </div>
        <div class="list">
          <img class="list-item" :src="imgLink" v-for="(imgLink, i) in textMap.listItemImgLinks" :key="i" :class="{ 'list-item-selected': i === tabIndex}">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    textMap: Object
  },
  data: function () {
    return {
      tabIndex: 0
    }
  },
  methods: {
    setTabIndex: function (x) {
      this.tabIndex = x
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  &-inner {
    margin: 72px auto 0;
    @include container-width;
  }
}

.tab-and-list {
  margin-top: 40px;
}
.tab {
  display: flex;
  justify-content: space-around;
  height: 60px;
  &-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;
    height: 100%;
    background-color: $indigo;
    border-radius: 8px 8px 0 0;
    &-selected {
      background-color: $lime;
      // @include shadow;
    }
    &-text {
      color: $white;
      font-size: 28px;
      font-weight: 700;
    }
  }
}

.list {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  border: 8px solid $lime;
  border-radius: 8px;
  // @include shadow;
  &-item {
    width: 0%;
    &-selected {
      width: 100%;
    }
  }
}
</style>
