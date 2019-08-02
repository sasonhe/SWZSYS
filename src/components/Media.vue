<template>
<div class="container">
  <van-divider :style="{ borderColor: '#fff',color:'#fff'}" class="bTitle">合作媒体</van-divider>
  <!-- 263e64 -->
  <div style="background:#0154a4;padding:.2rem 0;">
    <van-row>
      <van-col class="imgwrapper" :span="span" v-for="item in 36" :key="item">
        <div :class="classObject">
          <van-image
            width="100%"
            height="100%"
            :src="'./static/medias/'+item+'.jpg'"
          />
        </div>
      </van-col>
    </van-row>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      span:4,
      isClass:false
    }
  },
  created() {
    let isWhat = this.IsPC()
    if(isWhat){//PC
      this.span = 4
    }else{//Moblie
      this.span = 8
    }
  },
  methods: {
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
    classObject () {
      let isWhat = this.IsPC()
      return isWhat ? "imgItem" : "imgItemMoble"
    }
  }
}
</script>

<style scoped>
.imgwrapper{
  text-align: center;
}
.flex{
  display: flex;
}
.imgItem{
  display: inline-block;
  width: 2.5rem;
  height: 1.8rem;
  margin:6px;
  padding:6px;
}
.imgItemMoble{
  display: inline-block;
  width: 2.5rem;
  height: 1.8rem;
  /* margin: 6px; */
  padding: 6px;
  /* border: 1px solid #ddd; */
}
.bTitle::after, .bTitle::before {
    display: block;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 10px;
    border-color: #fff;
    /* color:#263e64; */
    /* border-style: inherit; */
    border-width:4px 0 0;
    /* border: none; */
}
</style>
