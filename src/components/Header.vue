<template>
<div class="header">
  <div class="mHeader" v-if="!showHeader">
    <!-- title="2019深圳国际生物医药产业创新发展峰会" -->
    <van-nav-bar fixed :z-index="11" @click-left="menuBar" :border="false" :style="style">
      <van-icon class="haver" name="wap-nav" slot="left" />
      <div class="topLogo" slot="left">
        <van-image class="img" :src="minLogo" />
      </div>
      <div class="rightBtn" slot="right">
        <div class="en">
          <span @click="changeLang(0)">CH</span>
          <span @click="changeLang(1)">EN</span>
          <div class="line" :style="isLeft">{{chEnChange}}</div>
        </div>
      </div>
    </van-nav-bar>
    <transition name="van-slide-down">
      <div class="list-bar" v-show="show" style="max-height:10rem;overflow-y: scroll;">
        <ul class="bar-list">
          <li class="bar-item van-hairline--bottom" v-for="(item,index) in json" :key="index">
            <a href="javascript:;" @click="jump(item.id)">{{item.name}}</a>
          </li>
        </ul>
      </div>
    </transition>
  </div>
  <div class="pHeader" v-if="showHeader">
    <div class="container" style="padding:0;">
      <van-row>
        <van-col span="8">
          <h1 class="Ptitle" :title="$t('bigTitle')">{{this.$t('bigTitle')}}</h1>
        </van-col>
        <van-col span="16">
          <div class="item-header">
            <ul class="bar-list-p">
              <li class="bar-item-p" v-for="(item,index) in topBar" :key="index">
                <a href="javascript:;" @click="jump(item.id)">{{item.name}}</a>
              </li>
            </ul>
            <div class="more" @mouseover="showMore()">
              <span class="more-text" @mouseout="hideMore()">{{this.$t('more')}}
                <van-icon class="absolute" name="arrow-down" /></span>
              <div class="list-bar" v-show="pcMore" @mouseout="hideMore()">
                <ul class="bar-list">
                  <li class="bar-item van-hairline--bottom" v-for="(item,index) in json" :key="index">
                    <a href="javascript:;" @click="jump(item.id)">{{item.name}}</a>
                  </li>
                </ul>
              </div>
            </div>

            <div style="text-align:center;display:inline-block">
              <van-button :type="isEn?'default':'info'" size="small" @click="changeLang(0)">中文</van-button>
              <van-button :type="!isEn?'default':'info'" size="small" @click="changeLang(1)">EN</van-button>
            </div>
          </div>

        </van-col>
      </van-row>
    </div>
  </div>
</div>
</template>

<script>
import {getCookie,setCookie} from '@/cookie'
export default {
  data() {
    return {
      style: {},
      opacity: 0,
      // isEn:window.localStorage.getItem('language')=='en'?true:false,
      isEn:getCookie('language')=='en'?true:false,
      pcMore: false,
      show: false,
      showHeader: true,
      minLogo: require('@/assets/logo/minLogo.png'),
      topBar: this.$t('topBar'),
      json: this.$t('topBarJson')
    }
  },
  created() {
    window.onscroll = ()=> {
      var opacity = window.pageYOffset / 400;
      this.style = {background: `rgba(44,91,136,${opacity})`}
    }
    let isWhat = this.IsPC();
    if (isWhat) {
      this.showHeader = true;
    } else {
      this.showHeader = false;
    }
  },
  mounted() {
    let id = this.$route.query.id;
    if (id) {
      this.jump(id);
    }
  },
  methods: {
    changeLang(num){
      if (num === 0) {//ZH
        this.isEn = false;
        this.$i18n.locale = 'zh'
        // window.localStorage.setItem('language','zh')
        setCookie('language','zh',60)
        document.title= this.$t('bigTitle')
        document.body.style.fontFamily = ""
        this.$router.push({
          path: '/'
        });
      }else if(num === 1){//EN
        this.isEn = true;
        this.$i18n.locale = 'en'
        // window.localStorage.setItem('language','en')
        setCookie('language','en',60)
        // setCookie(cname,cvalue,exdays)
        document.title= this.$t('bigTitle')
        document.body.style.fontFamily = "Times"
        this.$router.push({
          path: '/'
        });
      }
    },
    hideMore() {
      this.pcMore = false;
    },
    showMore() {
      this.pcMore = true
    },
    // 判断PC
    IsPC() {
      var userAgentInfo = navigator.userAgent;
      var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"
      ];
      var flag = true;
      for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
          flag = false;
          break;
        }
      }
      return flag;
    },
    menuBar() {
      this.show = !this.show;
    },
    jump(index) {
      this.show = false;
      // 用 class="d_jump" 添加锚点
      let jump = document.querySelectorAll('.d_jump')
      let total = jump[index].offsetTop - 80
      let distance = document.documentElement.scrollTop || document.body.scrollTop
      // 平滑滚动，时长500ms，每10ms一跳，共50跳
      let step = total / 50
      if (total > distance) {
        smoothDown()
      } else {
        let newTotal = distance - total
        step = newTotal / 50
        smoothUp()
      }

      function smoothDown() {
        if (distance < total) {
          distance += step
          document.body.scrollTop = distance
          document.documentElement.scrollTop = distance
          setTimeout(smoothDown, 10)
        } else {
          document.body.scrollTop = total
          document.documentElement.scrollTop = total
        }
      }

      function smoothUp() {
        if (distance > total) {
          distance -= step
          document.body.scrollTop = distance
          document.documentElement.scrollTop = distance
          setTimeout(smoothUp, 10)
        } else {
          document.body.scrollTop = total
          document.documentElement.scrollTop = total
        }
      }
    },
  },
  computed:{
    chEnChange(){
      return this.isEn ? "EN":"CH"
    },
    isLeft(){
      return this.isEn ? "right:0":"left:0"
    },
    topBarData(){
      return this.$t('topBar')
    },
    jsonData(){
      return this.$t('topBarJson')
    }
  },
  updated(){
    this.topBar = this.topBarData
    this.json = this.jsonData
  }
}
</script>

<style scoped>
.rightBtn {
  width: 1.8rem;
  height: 1.2rem;
  position: relative;
}

.rightBtn .en {
  width: 1.6rem;
  height: 0.6rem;
  line-height: 0.6rem;
  font-size: .32rem;
  font-weight: bold;
  font-family: Times;
  border: 0.05rem solid #fff;
  border-radius: 0.2rem;
  position: absolute;
  top: 50%;
  margin-top: -0.35rem;
}

.rightBtn .en span {
  display: inline-block;
  width: 0.6rem;
  color: #fff;
}

.line {
  display: inline-block;
  width: 0.8rem;
  height: 100%;
  border-radius: .1rem;
  background: #fff;
  position: absolute;
  top: 0;
}

.topLogo {
  display: inline-block;
  padding-left: .22rem;
}

.img {
  width: .68rem;
  position: absolute;
  top: .3rem;
}

.van-nav-bar__title {
  max-width: 80%;
}

[class*=van-hairline]::after {
  border-color: #fff;
}

.pHeader {
  width: 100%;
  height: 1.4rem;
  line-height: 1.4rem;
  position: fixed;
  top: 0;
  z-index: 10;
  background: #04183b;
  color: #fff;
}

.Ptitle {
  max-height: 1.4rem;
  font-size: .34rem;
  font-weight: 400;
  color: #d6aeaa;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.haver {
  cursor: pointer;
  padding: .2rem;
  font-size: .34rem
}

.mHeader .list-bar {
  width: 3rem;
  position: fixed;
  top: 1.2rem;
  left: 0;
  z-index: 10;
}

.bar-list {
  background: #36a5be;
  background: rgba(51, 44, 43, .8);
}

.bar-item {
  padding: .2rem 0;
}

.bar-item a {
  display: block;
  /* height: .8rem; */
  line-height: .58rem;
  font-size: .34rem;
  color: #fff;
  text-align: center;
  cursor: pointer;
}

.item-header {
  text-align: right;
}

.item-header .bar-list-p {
  display: inline-block;
}

.bar-item-p {
  display: inline-block;
  padding: 0 .2rem;
}

.bar-item-p a {
  height: .8rem;
  line-height: .8rem;
  font-size: .34rem;
  color: #d6aeaa;
  cursor: pointer;
}

.bar-item-p a:hover,
.bar-item a:hover {
  color: #fdc9c4;
}

.van-icon {
  font-size: .68rem;
  color: #fff;
}

.van-nav-bar {
  /* background: #2c5b88; */
  background: rgba(0,0,0,0);
  height: 1.2rem;
  line-height: 1.2rem;
}

.van-nav-bar__title {
  color: #FFF;
  font-size: .46rem;
}

.more {
  display: inline-block;
  position: relative;
  width: 80px;
}

.more-text {
  display: block;
  position: relative;
  cursor: pointer;
  font-size: .36rem;
  color: #d6aeaa;
  text-align: left;
  width: 60px;
}

.more-text:hover {
  color: #fdc9c4;
}

.absolute {
  position: absolute;
  top: 24px;
  right: -10px;
  color: #d6aeaa;
  font-size: .5rem;
}

.more .list-bar {
  width: 3rem;
  position: absolute;
  right: -50px;
  z-index: 1;
}

.more .bar-list {
  background: #36a5be;
  background: rgba(4, 24, 59, 0.8);
}

.more .bar-item a {
  color: #d6aeaa;
}

.more .bar-item a:hover {
  color: #fdc9c4;
}
</style>
