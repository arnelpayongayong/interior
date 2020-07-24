import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Interior from '@/components/Interior'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Interior',
      component: Interior
    }
  ]
})
