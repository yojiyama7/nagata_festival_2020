import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/Test'
import PageHome from '@/components/PageHome'
import PageStuff from '@/components/PageStuff'
import PageStageGeneral from '@/components/PageStageGeneral'
import PageStageStudent from '@/components/PageStageStudent'
import PageMapGeneral from '@/components/PageMapGeneral'
import PageMapStudent from '@/components/PageMapStudent'
import PageBoothGeneral from '@/components/PageBoothGeneral'
import PageBoothStudent from '@/components/PageBoothStudent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: PageHome
    },
    {
      path: '/stuff',
      component: PageStuff
    },
    {
      path: '/map-general',
      component: PageMapGeneral
    },
    {
      path: '/map-student',
      component: PageMapStudent
    },
    {
      path: '/booth-general',
      component: PageBoothGeneral
    },
    {
      path: '/booth-student',
      component: PageBoothStudent
    },
    {
      path: '/stage-general',
      component: PageStageGeneral
    },
    {
      path: '/stage-student',
      component: PageStageStudent
    },
    {
      path: '/test',
      // name: 'Test',
      component: Test
    }
  ]
})
