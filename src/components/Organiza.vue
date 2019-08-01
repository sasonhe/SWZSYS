<template>
  <div class="organiza container" :class="classObj" :style="{backgroundImage:'url('+bg+')'}">
    <div class="wrapper clearfix">
      <van-row>
        <van-col :span="spanFlex">
          <div class="item-list" style="margin-bottom:.3rem;">
            <h2 class="topTitle">{{this.$t('structure.mTitle1')}}</h2>
            <p class="msTitle">{{this.$t('structure.mText1.desc1')}}</p>
            <p class="msTitle">{{this.$t('structure.mText1.desc2')}}</p>
          </div>
        </van-col>
        <van-col :span="spanFlex">
          <div class="item-list">
            <h2 class="topTitle">{{this.$t('structure.mTitle2')}}</h2>
            <p class="msTitle">{{this.$t('structure.mText2.desc1')}}</p>
            <p class="msTitle">{{this.$t('structure.mText2.desc2')}}</p>
            <p class="msTitle">{{this.$t('structure.mText2.desc3')}}</p>
            <p class="msTitle">{{this.$t('structure.mText2.desc4')}}</p>
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
    bg:require('@/assets/images/Ogbg.png')
    }
  },
  methods:{
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
    spanFlex () {
      let isWhat = this.IsPC()
      return isWhat ? 12 : 24
    },
    classObj () {
      let isWhat = this.IsPC()
      return isWhat ? "isPc" : "isMobile"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper{
  margin-bottom:1rem;
}
.bTitle{
  color:#000;
}
.topTitle{
  font-size: .46rem;
  color: #fff;
  margin-bottom: .2rem;
}
.msTitle{
  font-size: .36rem;
  color: #fff;
  font-weight: 600;
  line-height: .56rem;
  margin-bottom: .2rem;
}
.item-list{
  padding: 0 .2rem;
}
.van-hairline--surround::after{
  border-color: #000;
}
 .isPc{
  background-repeat:no-repeat;
  background-size:30%;
  background-position: right bottom;
}
.isMobile{
 background-repeat:no-repeat;
 background-size:50%;
 background-position: right bottom;
}
</style>

<style scoped>
.bTitle::after, .bTitle::before {
    display: block;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 10px;
    border-color: #263e64;
    /* color:#263e64; */
    /* border-style: inherit; */
    border-width:4px 0 0;
    /* border: none; */
}
</style>
