<template>
  <div :class="classObj">
    <div class="top">
      <van-image width="100%" :src="topLogo" />
    </div>
    <div class="center">
      <!-- <div class="title">参会指引</div> -->
      <van-row>
        <van-col span="8">
          <div class="box" @click="toGuide(1)">
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
          <div class="box" @click="toGuide(3)">
            <div class="icon"><van-icon name="contact" /></div>
            <div class="name">嘉宾介绍</div>
            <div class="enText">Guest Introduction</div>
          </div>
        </van-col>
      </van-row>

      <van-row>
        <van-col span="8">
          <div class="box" @click="toGuide(4)">
            <div class="icon"><van-icon name="shop-o" /></div>
            <div class="name">就餐指引</div>
            <div class="enText">Dining Guidelines</div>
          </div>
        </van-col>
        <van-col span="8">
          <div class="box" @click="toGuide(5)">
            <div class="icon"><van-icon name="hotel-o" /></div>
            <div class="name">酒店指引</div>
            <div class="enText">Hotel Guidelines</div>
          </div>
        </van-col>
        <van-col span="8">
          <div class="box" @click="toGuide(6)">
            <div class="icon"><van-icon name="aim" /></div>
            <div class="name">交通指引</div>
            <div class="enText">Traffic Guideline</div>
          </div>
        </van-col>
      </van-row>
    </div>
    <div class="bottm">
      <van-image width="100%" :src="btmLogo" />
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        topLogo: require('@/assets/go/1.jpg'),
        btmLogo: require('@/assets/go/2.jpg'),
        minLogo: require('@/assets/logo/minLogo.png')
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
  background: #0a408a;
  margin: 0 auto;
}
.isMobile{
  width: auto;
  height: 100vh;
  background: #0a408a;
}
.van-image {
  display: block;
}

.center{
  background: #0a408a;
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

</style>
