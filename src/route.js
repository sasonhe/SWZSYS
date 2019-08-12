import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home';
import GoMap from '@/components/GoMap';
// import Traffic from '@/components/Traffic';
import Images from '@/components/Images';
import MyPosit from '@/components/MyPosit';
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/GoMap',
      name: 'GoMap',
      component: GoMap
    },
    {
      path: '/Traffic',
      name: 'Traffic',
      component: () => import("@/components/Traffic")
    },
    {
      path: '/Images',
      name: 'Images',
      component: Images
    },
    {
      path: '/MyPosit',
      name: 'MyPosit',
      component: MyPosit
    }
  ]
})
