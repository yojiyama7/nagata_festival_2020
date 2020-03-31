<template>
  <div class="box" :class="classObject">
    <div class="box-inner">
      <BaseHeading
      :text="'Menu'"
      />
      <div class="menu-content">
        <div class="menu-content-inner">
          <div class="menu-list">
            <router-link class="menu-item"
            v-for="(item, i) in items1"
            :key="i"
            :to="item.to"
            @click.native="toggleMenu()"
            >
              <i class="material-icons menu-item-img">
                {{ item.icon }}
              </i>
              <p class="menu-item-text">{{ item.text }}</p>
            </router-link>
          </div>
          <div class="menu-logo">
            <div class="menu-logo-inner">
              <img class="menu-logo-text" src="../assets/logo_menu_text.svg">
              <img class="menu-logo-img" src="../assets/logo_menu.svg">
            </div>
            <p class="menu-logo-text-2">
              2020 Nagata High School Festicval
            </p>
          </div>
        </div>
        <div class="menu-content-inner">
          <TheMenuPageTab
          class="menu-tab"
          :toggleMenu="toggleMenu"
          />
          <div class="share">
            <div class="share-inner">
              <p class="share-text">Share</p>
              <a class="share-icon" :href="item.link" v-for="(item, i) in text.share" :key="i">
                <!-- <i class="material-icons">
                  {{ item.icon }}
                </i> -->
                <i class="fab share-icon-inner" :class="'fa-' + item.icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheMenuPageTab from './TheMenuPageTab'

export default {
  props: {
    isMenuOpen: Boolean,
    toggleMenu: Function
  },
  components: {
    TheMenuPageTab
  },
  data: function () {
    return {
      items1: [
        {
          text: 'ホーム',
          icon: 'home',
          to: '/'
        },
        {
          text: 'スタッフ',
          icon: 'person',
          to: '/stuff'
        }
      ],
      text: {
        share: [
          { link: '', icon: 'twitter' },
          { link: '', icon: 'facebook-f' },
          { link: '', icon: 'line' }
        ]
      }
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
    height: 90%;
    @include container-width;
    @include pc {
      height: 80%;
    }
  }
}

// to be component

.menu {
  &-content {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-top: 24px;
    @include pc {
      flex-direction: row;
      margin-top: 40px;
    }
    &-inner {
      @include pc {
        width: 44%;
      }
    }
  }
  &-list {
    display: flex;
    align-items: center;
    justify-content: space-around;
    // margin-top: 24px;
    height: 80px;
    width: 100%;
    border-radius: 4px;
    background-color: $indigo;
    color: $white;
    &:not(:first-child) {
      margin-top: 32px;
    }
  }
  &-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 50%;
    font-size: 20px;
    text-decoration: none;
    // padding: 24px;
    &-img {
      // height: 60px;
      padding: 2px;
      font-size: 52px;
      background-color: $white;
      background-clip: text;
      border-radius: 50%;
      color: $indigo;
      text-decoration: none;
      // color: $white;
    }
    &-text {
      margin-left: 8px;
      color: $white;
    }
  }
  &-logo {
    display: none;
    margin-top: 76px;
    @include pc {
      display: flex;
      flex-direction: column;
    }
    &-inner {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
    }
    &-text {
      width: 70%
    }
    &-img {
      width: 26%
    }
    &-text-2 {
      margin-top: 12px;
      color: $lime;
      font-size: 27px;
      font-weight: 700;
    }
  }
  &-tab {
    margin-top: 32px;
    @include pc {
      margin-top: 0px;
    }
  }
}
.menu-open {
  clip-path: polygon(100% 0, 0 0, 0 100%, 100% 100%);
}

.share {
  display: flex;
  justify-content: flex-end;
  margin-top: 32px;
  &-text {
    margin-right: 8px;
    font-size: 28px;
    color: $lime;
  }
  &-inner {
    display: flex;
    align-items: center;
  }
  &-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 12px;
    height: 52px;
    width: 52px;
    background-color: $lime;
    border-radius: 50%;
    text-decoration: none;
    &-inner {
      font-size: 32px;
      color: $white;
    }
  }
}
</style>
