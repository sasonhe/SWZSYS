import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/to-register-page';
import Home from '@/components/Home';
import GoMap from '@/components/GoMap';
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/GoMap',
      name: 'GoMap',
      component: GoMap
    }
  ]
})
