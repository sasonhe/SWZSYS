<template>
  <div class="position" :class="classObj">
    <van-image
      @click="viewImg()"
      width="100%"
      height="100%"
      :src="img"
    />
    <van-image-preview
      v-model="show"
      :images="view"
    >
    </van-image-preview>
    <div class="coleFiexd" v-show="show" @click="closeShow()">
      <van-icon class="closeBtn" name="close" />
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      show:false,
      img:require('@/assets/myposit/1.jpg'),
      view:[require('@/assets/myposit/2.jpg')]
    }
  },
  methods:{
    closeShow(){
      this.show = false;
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
    viewImg(){
      this.show = true;
    }
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
.coleFiexd{
  width: 1rem;
  height: 1rem;
  text-align: center;
  border-radius: 50%;
  background: rgba(19, 44, 100, 0.5);
  position: fixed;
  bottom: .6rem;
  z-index: 9999;
  left: 50%;
  margin-left: -0.4rem;
  cursor: pointer;
}
.closeBtn{
  width: 1rem;
  height: 1rem;
  line-height: 1rem;
  font-size: 1rem;
  color: #fff;
}
.position{
  height: 100%;
  cursor: pointer;
}
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
</style>
