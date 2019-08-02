<template>
<div class="hisBar container">
  <van-tabs class="tab backgroundColor" v-model="active" animated swipeable :border="false"  background="none" color="#fff" title-inactive-color="#c0c0c0" title-active-color="#efefef" line-width="25%">
    <van-tab  title="2018年">
      <div>
        <History2018/>
      </div>
    </van-tab>
    <van-tab  title="2017年">
      <div>
        <History2017/>
      </div>
    </van-tab>
  </van-tabs>

</div>
</template>

<script>
import History2017 from '@/components/history-2017';
import History2018 from '@/components/history-2018';
export default {
  data() {
    return {
      active:0
    }
  },
  components:{
    History2017,History2018
  }
}
</script>

<style>
.van-tab.van-tab--active{
  font-size: .38rem;
}
.van-tabs--line .van-tabs__wrap{
  height: 1.2rem
}
.van-tab{
  font-size: .34rem;
  font-weight: bold;
  line-height: 1.4rem;
}
.histy .van-tabs__content{
  background: #fff;
  padding: .6rem 0;
  border-radius: 10px;
}
/* .backgroundColor .van-tabs__content{
  margin-top: .4rem;
  border-radius: 10px;
  background:none;
  background: #d2e2f2;
} */
.fenTitle .timeTitle{
  font-size: .4rem;
  font-weight: 600;
  color: #ffffff;
  padding-bottom: .2rem;
}
.van-steps{
  background-color: rgba(0,0,0,0) !important;
}
.zTitle{
  display: inline-block;
  color: #fff;
  font-size: .34rem;
  font-weight: bold;
  text-align: center;
  padding: 0 .28rem;
  height: .68rem;
  line-height: .68rem;
  background: #0788c6;
  border-radius: .42rem;
}
.nameTitle{
  font-size: .36rem;
  font-weight: bold;
  line-height: .46rem;
  margin-top: .1rem;
  margin-bottom: .2rem
}
.van-steps--vertical {
  padding: 0 0 0 24px;
}

.flex {
  display: flex;
}
.flex .item-flex-left {
  padding-right: .34rem;
  flex: 2rem 0 0;
  text-align: justify;
  -moz-text-align-last: justify;
  -webkit-text-align-last: justify;
  text-align-last: justify;
}
.flex .item-flex-right {
  flex: 1;
}

.border-1px::after {
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  border-top: 1px solid #ffffff;
  width: 100%;
  content: ' ';
}
.bTitle::after, .bTitle::before {
    display: block;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    box-sizing: border-box;
    height: 1px;
    border-color: #fff;
    border-style: inherit;
    border-width: 3px 0 0;
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
    border-color: #fff;
    /* color:#263e64; */
    /* border-style: inherit; */
    border-width:4px 0 0;
    /* border: none; */
}
</style>
