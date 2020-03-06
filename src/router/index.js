import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/Test'
import PageHome from '@/components/PageHome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      // name: 'Test',
      component: Test
    },
    {
      path: '/',
      component: PageHome
    }
  ]
})
