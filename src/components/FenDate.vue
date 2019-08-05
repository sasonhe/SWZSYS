<template>
<div class="container maxH" style="padding:0;">
  <van-divider :style="{ borderColor: '#263e64',margin:'0 .2rem'}" class="bTitle">{{$t('summiTbtitle')}}</van-divider>
  <van-tabs class="tab" v-model="activeDate" animated swipeable :border="false"  background="none" color="#fff" title-inactive-color="#c0c0c0" title-active-color="#efefef" line-width="25%">
    <van-tab  :title="$t('summit.mtitle.mtitle1')">
      <div class="eat" style="padding-top:.3rem;">
        <div class="custText">{{$t('summit.dataA.title')}}</div>
        <van-steps  direction="vertical" :active="null">
          <van-step v-for="(item,index) in $t('summit.dataA.jsonData')" :key="item+index">
            <div class="flex-wrapper">
              <div class="flex-left">
                <h3 class="zTitle">{{item.time}}</h3>
              </div>
              <div class="flex-right">
                <p class="nameTitle color-B">{{item.name}} </p>
              </div>
            </div>
          </van-step>
        </van-steps>
      </div>
    </van-tab>
    <van-tab  :title="$t('summit.mtitle.mtitle2')">
      <div style="padding-top:.3rem;">
        <van-tabs class="tab child" v-model="active" animated swipeable :offset-top="76" :border="false" background="#007cc2" color="#fff" title-inactive-color="#BBDBF3" title-active-color="#fff" line-width="0" :ellipsis="false">
          <van-tab  v-for="(name,n) in $t('summit.dataB.fenData')" :key="n" :title="name.name">
            <div style="padding:0.2rem;" class="scrollH">
              <div class="flex fenTitle" v-for="(title,nd) in name.title" :key="nd">
                <div class="item-flex-left timeTitle">{{title | left(title)}}</div>
                <div class="item-flex-right timeTitle">{{title | right(title)}}</div>
              </div>
              <van-steps v-if="name.type == 666" direction="vertical" :active="null">
                <van-step v-for="(item,index) in name.main" :key="index">
                  <div class="flex-wrapper">
                    <div class="flex-left">
                      <h3 class="zTitle">{{item.time}}</h3>
                    </div>
                    <div class="flex-right">
                      <p class="nameTitle color-B" v-for="(items,i) in item.content" :key="i+items">{{items}}</p>
                      <p class="nameTitle  color-B" v-for="(gust,ides) in item.gust" :key="ides">{{gust}}</p>
                    </div>
                  </div>
                </van-step>
              </van-steps>
              <van-steps v-else direction="vertical" :active="null">
                <van-step v-for="(item,index) in name.main" :key="index">
                  <div class="flex-wrapper">
                    <div class="flex-left">
                      <h3 class="zTitle">{{item.time}}</h3>
                    </div>
                    <div class="flex-right">
                      <p class="nameTitle color-B" v-for="(items,i) in item.dev" :key="i">{{items}}</p>
                    </div>
                  </div>
                </van-step>
              </van-steps>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </van-tab>
  </van-tabs>
</div>
</template>

<script>
export default {
  data() {
    return {
      active:0,
      activeDate:0
    }
  },
  created() {},
  methods: {},
  filters:{
    left(value,n){
      let arr = value.split('：');
      return arr[0]
    },
    right(value,n){
      let arr = value.split('：');
      return arr[1]
    }
  }
}
</script>

<style>
.custText{
  line-height: .48rem;
  font-size: .42rem;
  background: #007cc2;
  font-weight: 600;
  color: #fff;
  border: 1px solid #fff;
  padding-left: .4rem;
  margin-bottom: .3rem;
  padding-top: .36rem;
  padding-bottom: .36rem;
}
.eat {
  padding: .4rem .2rem;
}
.eat p{
    color: #fff;
    padding-bottom: .3rem;
}
.maxH .tab.child .van-tab{
  border: 1px solid #fff;
  border-left: none;
}
.maxH .tab.child .van-tab:first-child{
  border-left: 1px solid #fff;
}
.flex-wrapper{
  display: flex;
}
.flex-left{
  flex: 0 0 2.8rem;
}
.flex-right{
  flex: 1;
}
.maxH .van-step--vertical:first-child::before{
  background-color: #00a2e9;
}
.scrollH{
  height: 15rem;
  overflow-y:scroll;
}
.van-step__circle{
  background-color: #0788c6;
}
[class*=van-hairline]::after{
  border-color: #00a2e9;
}
.van-step__line {
  background-color: #00a2e9;
}
.van-tabs--line .van-tabs__wrap{
  height: .88rem
}
.van-tab{
  font-size: .34rem;
  font-weight: bold;
  line-height: .88rem;
}
.maxH .van-tabs__content{
  background: #0154a4;
}
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
  padding: 0 .12rem;
  height: .68rem;
  line-height: .68rem;
  background: #0788c6;
  border-radius: .42rem;
}
.nameTitle{
  font-size: .36rem;
  font-weight: bold;
  line-height: .46rem;
  margin-bottom: .2rem;
  margin-top:.1rem;
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
.color-A{
  color: #0788c6;
}
.color-B{
  color: #fff;
}
.bTitle::after, .bTitle::before {
    display: block;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 10px;
    border-color: red;
    /* border-color: #263e64; */
    /* color:#263e64; */
    /* border-style: inherit; */
    border-width:4px 0 0;
    /* border: none; */

}
</style>
