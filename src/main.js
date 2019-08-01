// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { NavBar,Icon,Cell, CellGroup,Image,Row, Col,Divider,Step, Steps,Tab, Tabs,Button,Field,Toast   } from 'vant';
import axios from 'axios'
import router from './route'
Vue.use(Cell).use(CellGroup).use(Image).use(Icon).use(NavBar).use(Row).use(Col).use(Divider).use(Step).use(Steps).use(Tab).use(Tabs).use(Button).use(Field).use(Toast );
import 'lib-flexible'
import '@/assets/css/public.css'
import AMap from 'vue-amap';
Vue.use(AMap);
// 初始化vue-amap
AMap.initAMapApiLoader({
  // 高德key
  key: 'b7d8182509200b3c7bc6e08c58043dab',
  // 插件集合 （插件按需引入）
  plugin: ['AMap.Geolocation']
});
Vue.config.productionTip = false
Vue.prototype.$http = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
