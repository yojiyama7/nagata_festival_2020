<template>
  <div class="box">
    <div class="box-inner">
      <BaseHeading :text="'Stuff'" />
      <div class="content">
        <p class="content-desc">
          文化祭スタッフとは…………………………………………
          …………………………………………
        </p>
        <div class="stuff-list">
          <BaseTitleAndDesc :textMap="item" v-for="(item, i) in stuffList" :key="i" class="stuff-item"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      stuffList: [
        {
          title: '実行委員長',
          descs: [
            '仕事内容(ぶんすたの勧誘に使えそうな文章)',
            '一言（校閲に引っかからんかったらなんでもいい）'
          ]
        }
      ]
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

.content {
  margin-top: 48px;
  &-desc {
    font-size: 20px;
  }
}

.stuff {
  &-list {
    margin-top: 48px;
  }
  &-item {
    border-bottom: 8px solid $indigo;
    &:first-child {
      border-top: 8px solid $indigo;
    }
  }
}
</style>
