<template>
  <div class="box">
    <div class="box-inner">
      <BaseHeading
      :text="'Access'"
      />
      <div class="content">
        <div class="content-chars">
          <p class="content-title">長田高校</p>
          <div class="content-text">
            <div class="content-text-inner" v-for="(texts, i) in textsList" :key="i">
              <p class="content-text-line" v-for="(text, j) in texts" :key="j">
                {{ text }}
              </p>
            </div>
          </div>
        </div>
        <div class="content-map">
          <!-- 動かせる方が良い? -->
          <!-- うごかせなくても運用はできそう -->
          <iframe class="content-map-inner" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.3907507686745!2d135.14154321495053!3d34.67008628044235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000858f683ffc87%3A0x9f05c21ab04e7f09!2z5YW15bqr55yM56uL6ZW355Sw6auY562J5a2m5qCh!5e0!3m2!1sja!2sjp!4v1583742795374!5m2!1sja!2sjp" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      textsList: [
        [
          '【神戸高速線】',
          '高速長田駅から徒歩15分'
        ],
        [
          '【市営地下鉄】',
          '長田駅から徒歩15分'
        ],
        [
          '【JR】',
          '兵庫駅から市バス(4系統)で長田神社前徒歩5分'
        ]
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  &-inner {
    margin: 96px auto 0;
    @include container-width;
    @include pc {
      margin: 152px auto 0;
    }
  }
}

.content {
  margin-top: 48px;
  font-size: 20px;
  @include pc {
    display: flex;
    justify-content: space-between;
    font-size: 28px;
  }
  &-title {
    font-size: 28px;
    @include pc {
      font-size: 36px;
    }
  }
  &-text {
    margin-top: 28px;
    &-inner {
      margin-top: 16px;
    }
    &-line {
      line-height: 1.6em;
    }
  }
  &-chars {
    width: 100%;
    @include pc {
      width: 48%;
    }
  }
  &-map {
    margin-top: 36px;
    @include pc {
      margin-top: 0px;
      width: 48%;
    }
    &-inner {
      width: 100%;
      height: $container-width * 0.5625;
      @include pc {
        height: $container-width-pc * 0.5625;
      }
    }
  }
}
</style>
