<template>
  <div>
    <PageHomeTop />
    <PageHomeAbout />
    <PageHomeThemeSong />
    <PageHomeB1 />
    <PageHomePayment />
    <PageHomeAccess />
  </div>
</template>

<script>
import PageHomeTop from './PageHomeTop'
import PageHomeAbout from './PageHomeAbout'
import PageHomeThemeSong from './PageHomeThemeSong'
import PageHomeB1 from './PageHomeB1'
import PageHomePayment from './PageHomePayment'
import PageHomeAccess from './PageHomeAccess'

export default {
  components: {
    PageHomeTop,
    PageHomeAbout,
    PageHomeThemeSong,
    PageHomeB1,
    PageHomePayment,
    PageHomeAccess
  }
}
</script>

<style lang="scss" scoped>

</style>
