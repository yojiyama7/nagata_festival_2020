<template>
  <div class="box">
    <div class="box-inner">
      <BaseHeading :text="textMap.heading.text" :subText="textMap.heading.subText"/>
      <div class="time-table">
        <!-- src -->
        <img class="time-table-img" :src="textMap.timeTableImgLink">
      </div>
      <div class="outdoor">
        <BaseHeading2 :text="'野外ステージ'"/>
        <div class="desc">
          <p class="desc-text">
            {{ textMap.outdoorDescText }}
          </p>
          <!-- src -->
          <img class="desc-img" :src="textMap.outdoorDescImgLink">
        </div>
        <div class="list">
          <BaseTitleAndDesc class="list-item" v-for="(map, i) in textMap.outdoorList" :key="i" :textMap="map"/>
        </div>
      </div>
      <div class="indoor">
        <BaseHeading2 :text="'講堂'" />
        <!-- src -->
        <div class="desc">
          <p class="desc-text">
            {{ textMap.indoorDescText }}
          </p>
          <img class="desc-img" :src="textMap.indoorDescImgLink">
        </div>
        <div class="list">
          <BaseTitleAndDesc class="list-item" v-for="(map, i) in textMap.indoorList" :key="i" :textMap="map"/>
        </div>
      </div>
      <div>

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

.time-table {
  margin-top: 60px;
}

.outdoor {
  margin-top: 80px;
}

.indoor {
  margin-top: 80px;
}

.desc {
  display: flex;
  margin-top: 48px;
  &-text {
    font-size: 18px;
  }
  &-img {
    margin-left: 16px;
    width: 30%;
  }
}

.list {
  margin-top: 32px;
  &-item {
    border-bottom: 8px solid $indigo;
    &:first-child {
      border-top: 8px solid $indigo;
    }
  }
}
</style>
