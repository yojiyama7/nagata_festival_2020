<template>
  <div id="the-menu">
    <TheMenuPage
      :isMenuOpen="isMenuOpen"
      :toggleMenu="toggleMenu"
    />
    <TheMenuButton
      :isMenuOpen="isMenuOpen"
      :toggleMenu="toggleMenu"
    />
  </div>
</template>

<script>
import TheMenuButton from './TheMenuButton'
import TheMenuPage from './TheMenuPage'

export default {
  components: {
    TheMenuButton,
    TheMenuPage
  },
  data: function () {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu: function () {
      console.log('toggle menu')
      if (this.isMenuOpen) {
        this.isMenuOpen = false
      } else {
        this.isMenuOpen = true
      }
    }
  },
  // とりあえずMenu側で$routeをwatchして見たがこれで良さそう。
  // 同じページへ遷移しようとした時にできない。だめそう。
  watch: {
    // '$route' (to, from) {
    //   this.isMenuOpen = false
    // }
  }
}
</script>

<style lang="scss" scoped>

</style>
