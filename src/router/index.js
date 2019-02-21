import Vue from 'vue'
import Router from 'vue-router'
// import  from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',//首页
      name: 'Home',
      component: resolve=>require(['@/page/home'],resolve)
    },
    {
      path:'/order',//订单页
      name:'Order',
      component:resolve=>require(['@/page/order'],resolve)
    },
    {
      path:'/mine',//个人中心
      name:'Mine',
      component:resolve=>require(['@/page/mine'],resolve)
    }
  ]
})
