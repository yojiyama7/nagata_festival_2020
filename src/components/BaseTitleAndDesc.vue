<template>
  <div class="box">
    <div class="box-inner">
      <div class="title-list" @click="toggleDesc()">
        <div class="title-main">
          <div class="title-main-text">
            {{ textMap.title }}
          </div>
          <img class="title-main-icon" :class="{ 'title-main-icon-open': isOpen }" src="../assets/triangle_lime.svg">
        </div>
        <p class="title-sub">
          {{ textMap.subTitle }}
        </p>
      </div>
      <div>
        <div class="desc-list" :class="{ 'desc-list-open': isOpen }">
          <!-- v-for -->
          <div>
            <div class="desc-item" v-for="(t, i) in textMap.descs" :key="i">
              {{ t }}
            </div>
          </div>
          <img :src="textMap.img" class="desc-img" :class="{ 'desc-img-display': textMap.img }">
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
      isOpen: false
    }
  },
  methods: {
    toggleDesc: function () {
      if (this.isOpen) {
        this.isOpen = false
      } else {
        this.isOpen = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  &-inner {
    margin: 32px 0 16px;
  }
}

.title {
  &-list {
  }
  &-main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &-text {
      font-size: 28px;
    }
    &-icon {
      transition-duration: 0.3s;
      height: 32px;
      &-open {
        transform: rotate(90deg);
      }
    }
  }
  &-sub {
    margin-top: 12px;
    font-size: 20px;
  }
}

.desc {
  &-list {
    overflow: hidden;
    display: flex;
    margin-top: 16px;
    max-height: 0;
    transition-duration: 0.4s;
    &-open {
      max-height: 200px;
    }
  }
  &-img {
    display: none;
    margin-left: 12px;
    width: 30%;
    &-display {
      display: block;
    }
  }
  &-item {
    padding: 16px 0;
    font-size: 18px;
    border-top: 4px solid $indigo;
  }
}
</style>
