<template>
  <div class="images" :class="classObj">
    <ul>
      <li class="listImg" v-for="item in 20" @click="clickView(item)" :key="item">
        <van-image
          width="100%"
          height="100%"
          :src="'./static/pdf/'+item+'.jpg'"
        />
      </li>
    </ul>
    <van-image-preview
      v-model="show"
      :images="arr"
      :startPosition="startPosition"
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
      index:0,
      show:false,
      startPosition:0,
      arr:[]
    }
  },
  created(){
    this.forData()
  },
  methods:{
    closeShow(){
      this.show = false;
    },
    clickView(id){
      this.index = id;
      this.startPosition = id-1;
      this.show = true;
    },
    onChange(index){
      console.log(index);
      this.index = index;
      this.startPosition = index;
    },
    onClickLeft(){
      this.$router.go(-1)
    },
    forData(){
      for (var i = 1; i <= 20; i++) {
        let str = `./static/pdf/${i}.jpg`;
        // let str = `../../static/pdf/${i}.jpg`;
        this.arr.push(str)
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
.images .van-nav-bar .van-icon {
    font-size: .46rem;
    color: #fff;
}
.images{

}
.listImg{
  cursor: pointer;
}
.van-nav-bar{
  background: #332C2B;
  height: 1.2rem;
  line-height:1.2rem;
}
.van-nav-bar__title{
  color: #FFF;
  font-size: .46rem;
}
.isMobile .van-nav-bar .van-icon{
  font-size: .46rem;
  color: #fff;
}
</style>
