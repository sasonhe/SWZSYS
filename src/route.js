import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home';
import GoMap from '@/components/GoMap';
import Hotel from '@/components/Hotel';
import Traffic from '@/components/Traffic';
import Images from '@/components/Images';
import MyPosit from '@/components/MyPosit';
import Video from '@/components/Video';
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import("@/components/Home")
    },
    {
      path: '/GoMap',
      name: 'GoMap',
      component: () => import("@/components/GoMap")
    },
    {
      path: '/Hotel',
      name: 'Hotel',
      component: () => import("@/components/Hotel")
    },
    {
      path: '/Traffic',
      name: 'Traffic',
      component: () => import("@/components/Traffic")
    },
    {
      path: '/Images',
      name: 'Images',
      component: () => import("@/components/Images")
    },
    {
      path: '/MyPosit',
      name: 'MyPosit',
      component: () => import("@/components/MyPosit")
    },
    {
      path: '/Video',
      name: 'Video',
      component: () => import("@/components/Video")
    }
  ]
})
