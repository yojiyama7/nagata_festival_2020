<template>
  <div class="box">
    <div class="box-inner">
      <BaseHeading :text="'Booth'" :subText="textMap.subText"/>
      <div class="booth-list">
        <div class="booth-item">
          <BaseHeading2 :text="'食品販売'" class="booth-item-title" />
          <div>
            <div class="booth-item-desc">
              <p class="booth-item-desc-text">
                {{ textMap.foodBooth.desc.text }}
              </p>
              <img :src="textMap.foodBooth.desc.imgLink"  class="booth-item-desc-img">
            </div>
            <div class="booth-item-list">
              <BaseTitleAndDesc :textMap="item" v-for="(item, i) in textMap.foodBooth.list" :key="i" class="booth-item-part" />
            </div>
          </div>
        </div>
        <div class="booth-item">
          <BaseHeading2 :text="'体験型模擬'" class="booth-item-title" />
          <div>
            <div class="booth-item-desc">
              <p class="booth-item-desc-text">
                {{ textMap.expBooth.desc.text }}
              </p>
              <img :src="textMap.expBooth.desc.imgLink" class="booth-item-desc-img">
            </div>
            <div class="booth-item-list">
              <BaseTitleAndDesc :textMap="item" v-for="(item, i) in textMap.expBooth.list" :key="i" class="booth-item-part" />
            </div>
          </div>
        </div>
        <div class="booth-item">
          <BaseHeading2 :text="'展示'" class="booth-item-title" />
          <div>
            <div class="booth-item-desc">
              <p class="booth-item-desc-text">
                {{ textMap.displayBooth.desc.text }}
              </p>
              <img :src="textMap.displayBooth.desc.imgLink"  class="booth-item-desc-img">
            </div>
            <div class="booth-item-list">
              <BaseTitleAndDesc :textMap="item" v-for="(item, i) in textMap.displayBooth.list" :key="i" class="booth-item-part"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    textMap: Object
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

.booth {
  &-list {
    margin-top: 80px;
  }
  &-item {
    margin-top: 80px;
    &-desc {
      display: flex;
      margin-top: 48px;
      &-text {
        font-size: 18px;
      }
      &-img {
        margin-left: 12px;
        width: 30%;
      }
    }
    &-list {
      margin: 32px 0 0;
    }
    &-part {
      border-bottom: 8px solid $indigo;
      &:first-child {
        border-top: 8px solid $indigo;
      }
    }
  }
}
</style>
