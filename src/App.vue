<template>
  <div id="app" :style="isEnStyle">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      isEn:window.localStorage.getItem('language')=='en'?true:false,
    }
  },
  created(){
    document.title= this.$t('bigTitle');
  },
  computed:{
    isEnStyle(){
      return this.isEn ? "font-family: 'Times'":""
    }
  }

}
</script>

<style>
.nameMap{
  min-width: 5.6rem;
  font-size: .36rem;
  color: #000;
}
.nameMap .el-vue-amap-container{
  min-height:600px;
}
body{
  background: #0154a4;
}
.container{
  max-width: 1140px;
  margin:0 auto;
  padding: .2rem;
}
*{
  margin:0;
  padding:0;
}

.title{
  font-size: .4rem;
}
.bgColorD{
  background: linear-gradient(to bottom,#ffffff,#d2e2f2);
}
.van-divider{
  line-height: normal;
}
.van-divider:after, .van-divider:before{
  border-width:1px;
}
.bgColor{
  /* background: linear-gradient(to bottom,#2094d3,#e1eefc); */
  background: #d2e2f2;

}
.bgColorC{
  /* background:#8db8fe; */
  background:#141d3c;
}
.bTitle{
  font-size: .52rem;
  color: #fff;
  font-weight: bold;
  letter-spacing: 3px;
  text-align: center;
  padding: .5rem 0;
  margin: 0;
}
.mTitle{
  font-size: .4rem;
  font-weight: bold;
  color: #263e64;
}
.text-indent{
  text-indent: 2em;
  text-align: justify;
}
.bgColorA{
  /* background:#edf2ff; */
  /* background: #0c3d8a; */
  /* background: #ffffff; */
 background: linear-gradient(to bottom, #E2E5F3, #ffffff);
}
.bgColorB{
  background: #fff;
}
.pBgColor{
  /* background: linear-gradient(to bottom,#6b7fbe,#ffffff); */
  background: #0a408a;
}
.goTop {
  position: fixed;
  bottom: 50px;
  right: 20px;
  cursor: pointer;
  user-select: none;
}
.topSize{
  font-size: 1rem;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity .6s
}
.fade-enter,
.fade-leave-to {
  opacity: 0
}
.clearfix:after {
  content: "";
  display: block;
  clear: both;
}

.clearfix {
  zoom: 1;
}
.tab .van-tabs--line .van-tabs__wrap{
  height: 1.4rem;
}
.bgColorC{
  /* background: #28739d; */
  background: #ffffff;
}
.bgColor{
 background: #D6DAEE;
}

.histy .van-ellipsis {
    font-size: .32rem;
}
/* .histy .van-tabs__line::after{
  content: '';
  position: absolute;
  top: -0.3rem;
  left: 50%;
  margin-left:-0.2rem;
  border: 0.2rem solid;
  border-color: #fff transparent transparent transparent;
} */


</style>
