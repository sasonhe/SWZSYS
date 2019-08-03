<template>
  <div class="histy">
    <!-- 无意义code 只为监听 -->
    <input type="hidden" :value="$t('hisYear.yearA')">
    <van-tabs v-model="active" swipeable animated :border="false"  background="#007cc2" color="#0054A3" title-inactive-color="#c0c0c0" title-active-color="#fff" line-width="0" :ellipsis="false">
      <van-tab v-for="(item,index) in jsonData" :title="item.name" :key="index">
        <div class="guList" v-for="(items,i) in item.drr" :key="i">
          <div class="guwrap">
            <van-row type="flex"  style="margin-bottom:.4rem;">
              <van-col :span="span" v-for="(itemArr,idx) in items" :key="idx">
                <div class="item" @click="toggleText(itemArr,itemArr.id)" :class="{ active: itemArr.active }">
                  <div class="top" >
                    <van-image width="100%" :src="'./static/history/2018/'+itemArr.id+'.jpg'"/>
                  </div>
                  <div class="main">
                    <h3 class="name">{{itemArr.name}}</h3>
                    <p class="text">{{itemArr.title}}</p>
                  </div>
                  <div class="bottom"><van-icon name="arrow-down" /></div>
                </div>
              </van-col>
            </van-row>
            <div class="text-content" v-for="(itemContent,ix) in items" :key="ix" v-show="itemContent.active">
              <h3 class="c-title">{{itemContent.name}}</h3>
              <p class="c-mtitle">{{itemContent.title}}</p>
              <div class="t-m" v-html="itemContent.desc"></div>
            </div>
          </div>
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
        span:4,
        textShow:false,
        jsonData:this.$t('historyB'),
        selectJson:[],
        text:{},
      }
    },
    created() {
      this.forData();
    },
    methods: {
      toggleText(item,id){
        this.jsonData.map((arr) => {
          arr.main.filter((items) => {
            if (items.id === id) {
              items.active = !item.active;
              // this.text = items
            }else{
              items.active = false;
            }
          })
        })
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

      forData(){
        var result = [];
        var num = null;
        let isWhat = this.IsPC();
        if(isWhat){//PC 5条一行
          num = 6
          this.span =4
        }else{//Moblie 3条一行
          num = 3
          this.span =8
        }
        this.jsonData.map((item,i)=>{
          let main = item.main;
          var result = [];
          for(var i=0;i<main.length;i+=num){
              result.push(main.slice(i,i+num));
          }
          item.drr = result
        })
      }
    },
    updated(){
      this.jsonData = this.historyB
      this.forData();
    },
    computed:{
      historyB(){
        return this.$t('historyB')
      },

    }
  }
</script>

<style scoped>

.year{
  font-size: .48rem;
  color: #2ebafe;
  text-align: center;
}

.item{
  max-width: 3.6rem;
  height: 5.6rem;
  margin: 0 .1rem;
  text-align: center;
  position: relative;
  vertical-align: top;
  background: #fff;
  /* box-shadow: 0px 8px 15px #5699c6; */
  /* box-shadow: 0px 8px 15px #bfd1e6; */
  /* background: #edf2ff; */
  /* background: linear-gradient(33deg, #b8ccee, #ffffff); */
    /* background: linear-gradient(33deg, #428CA5, #2F4D8A); */
}
.item.active{
  top:-0.4rem;
  background: #fff;
  /* box-shadow: 0 0.1rem 0.2rem #8da5e0; */
}
.top{
  width: 2.2rem;
  height: 2.8rem;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
  top: -0.48rem;
}
.bottom{
  position: absolute;
  bottom: 0;
  width: 100%;
  color: #253E54;
}
.name{
    color: #0054A3;
  font-size: .32rem;
  font-weight: bold;
  padding-bottom: .2rem;
}
.text{
  font-size: .24rem;
  color:#253E54;
  line-height: .36rem;
  text-align: center;
  padding: 0 .2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  font-weight: bold;
}
.text-content{
  padding: .2rem;
  border: 1px solid #ddd;
  background: #fff;
  text-align: left;


}
.text-content.hiClass{
  opacity: 1;
  transition: all 2s;
}
.c-title{
  font-size: 0.56rem;
  color:#4482bc;
  padding: .22rem 0;
}
.c-mtitle{
  font-size: 0.4rem;
    /* color:#ffffff; */
  color: #3858bf;
  word-break: break-word;
}
.t-m{
  text-indent: 2em;
  font-size: 0.36rem;
  color: #1c336f;
  margin-top: 0.3rem;
  line-height: 0.68rem;
  word-break: break-word;
  text-align: justify;
}
.van-icon{
  font-weight: bold;
  font-size: .46rem;
}
.guwrap{
  padding-top:.4rem;
  text-align: center;
  margin-bottom: .2rem;
}
.item:hover{
  cursor: pointer;
}

</style>
