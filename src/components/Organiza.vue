<template>
  <div class="organiza container" :style="{backgroundImage:'url('+bg+')'}">
    <!-- <van-divider :style="{ borderColor: '#263e64'}" class="bTitle bt">组织架构</van-divider> -->
    <div class="wrapper clearfix">
      <van-row>
        <van-col :span="spanFlex">
          <div class="item-list" style="margin-bottom:.3rem;">
            <h2 class="topTitle">主办单位：</h2>
            <p class="msTitle">深圳市坪山区人民政府</p>
            <p class="msTitle">中国国际贸易促进委员会深圳市委员会</p>
          </div>
        </van-col>
        <van-col :span="spanFlex">
          <div class="item-list">
            <h2 class="topTitle">承办单位：</h2>
            <p class="msTitle">深圳市坪山区投资推广服务署</p>
            <p class="msTitle">深圳市坪山区工业和信息化局</p>
            <p class="msTitle">深圳市坪山区科技创新局</p>
            <p class="msTitle">深圳国际商会</p>
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
  color: #000;
  margin-bottom: .2rem;
}
.msTitle{
  font-size: .36rem;
  color: #000;
  font-weight: 600;
  line-height: .56rem;
}
.item-list{
  padding: 0 .2rem;
}
.van-hairline--surround::after{
  border-color: #000;
}
 .container{
background-repeat:no-repeat;
background-size:30%;
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
