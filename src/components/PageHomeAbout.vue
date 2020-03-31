<template>
  <div class="box">
    <div class="box-inner">
      <BaseHeading :text="'About'" />
      <div class="schedule">
        <div class="schedule-box schedule-student">
          <h3 class="schedule-heading">校内祭</h3>
          <div class="schedule-time">
            <PageHomeAboutDate
            :month="'5'"
            :day="'15'"
            :weekday="'金'"
            />
            <PageHomeAboutTime
            :time1="['nn', 'nn']"
            :time2="['mm', 'mm']"
            />
          </div>
          <img src="../assets/schedule_student.svg" class="schedule-student-img">
        </div>
        <div class="schedule-box schedule-general">
          <h3 class="schedule-heading">一般祭</h3>
          <div class="schedule-time">
            <PageHomeAboutDate
            :month="'5'"
            :day="'16'"
            :weekday="'土'"
            />
            <PageHomeAboutTime
            :time1="['nn', 'nn']"
            :time2="['mm', 'mm']"
            />
          </div>
          <img src="../assets/schedule_general.svg" class="schedule-general-img schedule-general-img-sp">
          <img src="../assets/schedule_general_pc.svg" class="schedule-general-img schedule-general-img-pc">
        </div>
      </div>
      <p class="note">
        ※校内祭は生徒のみとなっております
      </p>
      <div class="else-section">
        <div class="else-section-box"
        v-for="(s, i) in text.elseSection"
        :key="i"
        >
          <h3 class="else-section-title">{{ s.title }}</h3>
          <div class="else-section-text-box">
            <p class="else-section-text"
            v-for="(item, j) in s.items"
            :key="j">
              <img src="../assets/triangle_lime.svg" class="else-section-text-icon">
              <a class="else-section-text-inner" target="_blank" :href="item.link">
                {{ item.text }}
              </a>
            </p>
            <p class="else-section-note">
              {{ s.note }}
            </p>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHomeAboutDate from './PageHomeAboutDate'
import PageHomeAboutTime from './PageHomeAboutTime'

export default {
  components: {
    PageHomeAboutDate,
    PageHomeAboutTime
  },
  data: function () {
    return {
      text: {
        elseSection: [
          {
            title: 'Official SNS',
            items: [
              {
                text: 'Twitter',
                link: 'https://twitter.com/ngt_fes_staff'
              },
              {
                text: 'Instagram'
              }
            ]
          },
          {
            title: 'Digial Pamphlet',
            items: [
              {
                text: 'ダウンロード'
              }
            ],
            note: '※ファイルサイズが大きいのでご注意ください。'
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  overflow: hidden;
  &-inner {
    margin: 48px auto 0;
    @include container-width;
    @include pc {
      margin: 152px auto 0;
    }
  }
}

.schedule {
  margin-top: 116px;
  @include pc {
    display: flex;
    justify-content: space-around;
    margin-top: 152px;
  }
  color: $white;
  &-box {
    &:not(:first-child) {
      margin-top: 200px;
      @include pc {
        margin-top: 0px;
      }
    }
  }
  &-student {
    position: relative;
    &-img {
      z-index: -10;
      position: absolute;
      top: -108px;
      left: -88px;
      width: 388px;
      @include pc {
        width: 520px;
        top: -144px;
        left: -124px;
      }
    }
  }
  &-general {
    position: relative;
    text-align: right;
    @include pc {
      text-align: left;
    }
    &-img {
      z-index: -10;
      position: absolute;
      top: -112px;
      left: 28px;
      width: 388px;
      @include pc {
        width: 520px;
        top: -132px;
        left: -136px;
      }
      &-sp {
        display: block;
        @include pc {
          display: none;
        }
      }
      &-pc {
        display: none;
        @include pc {
          display: block;
        }
      }
    }
  }
  &-heading {
    font-size: 28px;
    @include pc {
      font-size: 36px;
    }
  }
  &-time {
    margin-top: 76px;
    @include pc {
      margin-top: 112px;
    }
  }
}

.note {
  margin-top: 120px;
  color: $black;
  @include pc {
    margin-top: 180px;
    font-size: 20px;
  }
}

.else-section {
  margin-top: 92px;
  @include pc {
    display: flex;
    justify-content: space-around;
  }
  &-box {
    @include pc {
      width: 50%;
    }
    &:not(:first-child) {
      margin-top: 60px;
      @include pc {
        margin-top: 0px;
      }
    }
  }
  &-note {
    margin-top: 32px;
    font-size: 14px;
    @include pc {
      font-size: 20px;
    }
  }
  &-title {
    font-size: 40px;
    font-weight: 700;
    color: $indigo;
  }
  &-text {
    margin-top: 20px;
    font-size: 28px;
    font-weight: 700;
    &-inner {
      display: inline-block;
      // vertical-align: middle;
      margin-left: 16px;
      color: $lime;
      text-decoration: none;
      border-bottom: 4px solid $lime;
    }
    &-icon {
      display: inline-block;
      vertical-align: middle;
      height: 0.9em;
    }
    &-box {
      margin-top: 24px;
    }
  }
}
</style>
