<template>
  <PageMap :textMap="textMap" />
</template>

<script>
import PageMap from './PageMap'

export default {
  components: {
    PageMap
  },
  data: function () {
    return {
      textMap: {
        headingSubText: '- 校内祭 -',
        tabItems: [
          '1F',
          '2F',
          '3F',
          '4F'
        ],
        listItemImgLinks: [
          require('../assets/time_table.svg'),
          require('../assets/time_table.svg'),
          require('../assets/time_table.svg'),
          require('../assets/time_table.svg')
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
