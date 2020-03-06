<template>
  <div>
    <TheMenuPage
      :isMenuOpen="isMenuOpen"
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
      if (this.isMenuOpen) {
        this.isMenuOpen = false
      } else {
        this.isMenuOpen = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
