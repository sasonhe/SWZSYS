<template>
  <div :class="classObj">
    <div class="top">
      <van-image width="100%" :src="topLogo" v-lazy="topLogo"/>
    </div>
    <div class="center">
      <!-- <div class="title">参会指引</div> -->
      <van-row>
        <van-col span="8">
          <div class="box pointer" @click="toGuide(1)">
            <div class="icon"><van-icon name="calender-o" /></div>
            <div class="name">大会议程</div>
            <div class="enText">Ageda</div>
          </div>
        </van-col>
        <van-col span="8">
          <div class="box none">
            <div class="icon">
              <van-image class="img" :src="minLogo"/>
            </div>
            <div class="name">参会指引</div>
            <div class="enText">Guide</div>
          </div>
        </van-col>
        <van-col span="8">
          <div class="box pointer" @click="toGuide(3)">
            <div class="icon"><van-icon name="contact" /></div>
            <div class="name">嘉宾介绍</div>
            <div class="enText">Guest Introduction</div>
          </div>
        </van-col>
      </van-row>

      <van-row>
        <van-col span="8">
          <div class="box pointer" @click="toGuide('eat')">
            <div class="icon"><van-icon name="shop-o" /></div>
            <div class="name">就餐指引</div>
            <div class="enText">Dining Guidelines</div>
          </div>
        </van-col>
        <van-col span="8">
          <div class="box pointer" @click="toGuide(6)">
            <div class="icon"><van-icon name="aim" /></div>
            <div class="name">交通指引</div>
            <div class="enText">Traffic Guideline</div>
          </div>
        </van-col>
        <van-col span="8">
          <div class="box pointer" @click="toGuide('posit')">
            <div class="icon"><van-icon name="hotel-o" /></div>
            <div class="name">我的座位</div>
            <div class="enText">Seat</div>
          </div>
        </van-col>
      </van-row>
<!-- href="https://v.youku.com/v_show/id_XNDI3MjM1NDI4MA==.html?refer=seo_operation.liuxiao.liux_00003303_3000_Qzu6ve_19042900" -->
      <van-row>
        <van-col span="12">
          <a href="https://v.youku.com/v_show/id_XNDI3MjM1NDI4MA==.html?refer=seo_operation.liuxiao.liux_00003303_3000_Qzu6ve_19042900">
            <div class="box pointer" >
              <div class="icon"><van-icon name="fire-o" /></div>
              <div class="name">走进坪山</div>
              <div class="enText">Approach Pingshan</div>
            </div>
          </a>
        </van-col>
        <van-col span="12">
          <div class="box pointer" @click="toGuide('img')">
            <div class="icon"><van-icon name="gift-card-o" /></div>
            <div class="name">配套政策</div>
            <div class="enText">Sopporting policies</div>
          </div>
        </van-col>
      </van-row>
    </div>
    <div class="bottm">
      <van-image width="100%" :src="btmLogo" v-lazy="btmLogo"/>
    </div>
    <van-image-preview
        v-model="show"
        :images="view"
      >
      </van-image-preview>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show:false,
        topLogo: require('@/assets/go/1.jpg'),
        btmLogo: require('@/assets/go/2.jpg'),
        minLogo: require('@/assets/logo/minLogo.png'),
        view:[require('@/assets/images/eat.jpg')]
      }
    },
    created() {
    },
    methods: {
      toGuide(id){
        if(id === 1){
          this.$router.push({
            path: '/',
            query:{
              id:3
            }
          });
        }else if (id === 3) {
          this.$router.push({
            path: '/',
            query:{
              id:2
            }
          });
        }else if (id === 4) {
          this.$router.push({
            path: '/',
            query:{
              id:7
            }
          });
        }else if (id === 5) {
          this.$router.push({
            path: '/Hotel',
          });
        }else if (id === 6) {
          this.$router.push({
            path: '/Traffic',
          });
        }else if(id == 'img'){
          this.$router.push({
            path: '/Images',
          });
        }else if (id == 'posit') {
          this.$router.push({
            path: '/MyPosit',
          });
        }else if (id == 'eat') {
          this.show = true;
        }
      },

      // 判断PC
      IsPC() {
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "iPhone","SymbianOS", "Windows Phone","iPad", "iPod"];
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
      },
    },
    computed:{
      classObj () {
        let isWhat = this.IsPC()
        return isWhat ? "map-page" : "isMobile"
      }
    }
  }
</script>

<style scoped>
.map-page{
  width: 750px;
  background: #044fa0;
  margin: 0 auto;
}
.isMobile{
  width: auto;
  height: 100vh;
  background: #044fa0;
}
.van-image {
  display: block;
}

.center{
  background: #044fa0;
}

.title{
  width: 4.8rem;
  height: 1.2rem;
  line-height: 1.2rem;
  font-size: .48rem;
  margin: 0 auto;
  color: #fff;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 10px;
  background: #007ebe;
}
.box{
  height: 2.4rem;
  margin: .1rem;
  border-radius: .24rem;
  background: #007ebe;
  color: #fff;
  text-align: center;
}
.icon{
  padding: .16rem 0 0;
}
.icon .van-icon{
  font-size: .6rem;

}
.name{
  font-size: .4rem;
  padding: .1rem 0 0;
}
.enText{
  font-size: .32rem;
  padding: .1rem 0 .4rem;
}
.img{
  width: .68rem;
  margin: 0 auto;
}
.none{
  box-sizing: border-box;
  background: none;
  border: 1px solid #0089e2;
  border-radius: .24rem;
}
.pointer{
  cursor: pointer;
}
</style>
