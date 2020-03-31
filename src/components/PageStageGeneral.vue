<template>
  <PageStage
  :textMap="textMap"
  />
</template>

<script>
import PageStage from './PageStage'

export default {
  components: {
    PageStage
  },
  data: function () {
    return {
      textMap: {
        heading: {
          text: 'Stage',
          subText: '- 一般祭 -'
        },
        timeTableImgLink: require('../assets/time_table.svg'),
        outdoorDescText: 'teteteatetesofdのえくぁおfのだいwねlふぁうぇhふぉあlwん',
        outdoorDescImgLink: require('../assets/time_table.svg'),
        outdoorList: [
          {
            title: 'たちとる',
            subTitle: 'sabuたちとる',
            descs: [
              '12:05 - 12:10',
              'でですくくりぷしょしょしょんんん'
            ]
          }
        ],
        indoorDescText: 'teteteatetesofdのえくぁおfのだいwねlふぁうぇhふぉあlwん',
        indoorDescImgLink: require('../assets/time_table.svg'),
        indoorList: [
          {
            title: 'たちとる',
            subTitle: 'sabuたちとる',
            descs: [
              '12:05 - 12:10',
              'でですくくりぷしょしょしょんんん'
            ]
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
