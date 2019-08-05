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
.position{
  height: 100%;
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
