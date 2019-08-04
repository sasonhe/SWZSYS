<template>
  <div>
    <Heard/>
    <TopImg />
    <div>
      <Jshao  class="d_jump"/>
    </div>
    <div class="d_jump">
        <div class="container">
          <van-divider :style="{ borderColor: '#fff'}" class="bTitle bTitle1" style="color:#fff;">{{this.$t('structure.title')}}</van-divider>
        </div>
        <Organiza/>
    </div>
    <div class="d_jump">
      <Gust/>
    </div>
    <div class="d_jump">
      <fen-date/>
    </div>
    <div class="d_jump">
      <div class="container">
        <van-divider :style="{ borderColor: '#233e53'}" class="bTitle bTitle1" style="color:#fff;">{{$t('hisTitle')}}</van-divider>
      </div>
      <historyTabs/>
    </div>
    <div class="d_jump">
      <Register/>
    </div>
    <div class="d_jump">
      <Media/>
    </div>
    <div class="d_jump">
      <Maps />
    </div>
    <div class="d_jump">
      <Footer/>
    </div>
    <transition name="fade">
      <div class="goTop" v-show="goTop" @click="goToTop">
        <van-icon class="topSize" name="upgrade" />
      </div>
    </transition>
    <router-view></router-view>
  </div>
</template>

<script>
import Heard from '@/components/Header';
import TopImg from '@/components/TopImg';
import Jshao from '@/components/Jshao';
import Organiza from '@/components/Organiza';
import Gust from '@/components/Gust';
import FenDate from '@/components/FenDate';
import Media from '@/components/Media';
import Register from '@/components/Register';
import Footer from '@/components/Footer';
import Maps from '@/components/map';
import historyTabs from '@/components/historyTabs';
import Go from '@/components/Go';
let timer = null;
export default {
  name: 'App',
  data(){
    return {
      goTop: false
    }
  },
  components: {
    Heard,TopImg,Jshao,Organiza,Gust,FenDate,Media,Register,Footer,historyTabs,Maps,Go
  },
  mounted: function () {
    window.addEventListener('scroll', this.handleScroll, true);  // 监听（绑定）滚轮滚动事件
  },
  methods: {
    goToTop() {
        clearInterval(timer);
        timer = setInterval(function() {
          let curHeight = document.documentElement.scrollTop || document.body.scrollTop; // 得到当前高度
          var now = curHeight;
          var speed = (0 - now) / 7; // 随着高度减速
          speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
          if (curHeight === 0) { //当前高度为零,停止这次计时器
            clearInterval(timer); // C1
          }
          document.documentElement.scrollTop = curHeight + speed; //直接给高度赋值,会调用needtotop方法
          document.body.scrollTop = curHeight + speed; //谷歌的
        }, 30);
      },
      handleScroll() {
        if(window.scrollY > 210){
          this.goTop = true
        }else{
          this.goTop = false
        }
        // let curHeight = document.documentElement.scrollTop || document.body.scrollTop; // 得到当前高度
        // console.log(curHeight);
      },
      IsPC() {
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "iPhone",
                    "SymbianOS", "Windows Phone",
                    "iPad", "iPod"];
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
      }
    },
    computed:{
      // bgUrl () {
      //   let isWhat = this.IsPC()
      //   return isWhat ? this.pbg : this.mbg
      // }
    }
}
</script>
