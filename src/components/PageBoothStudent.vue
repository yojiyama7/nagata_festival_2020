<template>
  <div>
    <PageBooth :textMap="textMap"/>
  </div>
</template>

<script>
import PageBooth from './PageBooth'

export default {
  components: {
    PageBooth
  },
  data: function () {
    return {
      textMap: {
        subText: '校内祭',
        foodBooth: {
          desc: {
            text: 'ぱぴこぱぴこぱぴこぱぴこぱぴこぱぴこぱぴこぱぴこぱぴこぱぴこぱぴこぱぴこぱぴこぱぴこぱぴこぱぴこぱぴこ',
            imgLink: require('../assets/time_table.svg')
          },
          list: [
            {
              title: '団体名',
              subTitle: '演目',
              descs: [
                '12:10 - 12:15',
                'みんなでしゃがもうおじぞうさん。心はとっくにおじぞうさん。らんらんるーるーおじぞうさん。ほら、君ももうおじぞうさんだよ？'
              ],
              img: require('../assets/time_table.svg')
            },
            {
              title: '団体名',
              subTitle: '演目',
              descs: [
                '12:10 - 12:15',
                'みんなでしゃがもうおじぞうさん。心はとっくにおじぞうさん。らんらんるーるーおじぞうさん。ほら、君ももうおじぞうさんだよ？'
              ],
              img: require('../assets/time_table.svg')
            }
          ]
        },
        expBooth: {
          desc: {
            text: 'ぱぴこぱぴこぱぴこぱぴこぱぴこぱぴこぱぴこぱぴこぱぴこぱぴこぱぴこぱぴこぱぴこぱぴこぱぴこぱぴこぱぴこ',
            imgLink: require('../assets/time_table.svg')
          },
          list: [
            {
              title: '団体名',
              subTitle: '演目',
              descs: [
                '12:10 - 12:15',
                'みんなでしゃがもうおじぞうさん。心はとっくにおじぞうさん。らんらんるーるーおじぞうさん。ほら、君ももうおじぞうさんだよ？'
              ],
              img: require('../assets/time_table.svg')
            },
            {
              title: '団体名',
              subTitle: '演目',
              descs: [
                '12:10 - 12:15',
                'みんなでしゃがもうおじぞうさん。心はとっくにおじぞうさん。らんらんるーるーおじぞうさん。ほら、君ももうおじぞうさんだよ？'
              ],
              img: require('../assets/time_table.svg')
            }
          ]
        },
        displayBooth: {
          desc: {
            text: 'ぱぴこぱぴこぱぴこぱぴこぱぴこぱぴこぱぴこぱぴこぱぴこぱぴこぱぴこぱぴこぱぴこぱぴこぱぴこぱぴこぱぴこ',
            imgLink: require('../assets/time_table.svg')
          },
          list: [
            {
              title: '団体名',
              descs: [
                '12:10 - 12:15',
                'みんなでしゃがもうおじぞうさん。心はとっくにおじぞうさん。らんらんるーるーおじぞうさん。ほら、君ももうおじぞうさんだよ？'
              ]
            },
            {
              title: '団体名',
              descs: [
                '12:10 - 12:15',
                'みんなでしゃがもうおじぞうさん。心はとっくにおじぞうさん。らんらんるーるーおじぞうさん。ほら、君ももうおじぞうさんだよ？'
              ]
            }
          ]
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
