<template>
  <div class="organiza container" >
    <van-divider :style="{ borderColor: '#fff'}" class="bTitle bt">{{this.$t('gustTitle')}}</van-divider>
    <div class="guList" v-for="(item,index) in jsonData" :key="index">
      <div class="guwrap">
        <van-row type="flex"  style="margin-bottom:.4rem;">
          <van-col :span="span" v-for="(items,i) in item" :key="items.id">
            <div class="item" @click="toggleText(items,items.id,item.index)" :class="{ active: items.active }">
              <div class="top" >
                <van-image width="100%" :src="'./static/images/'+items.id+'.jpg'"/>
              </div>
              <div class="main">
                <h3 class="name">{{items.name}}</h3>
                <p class="text">{{items.title}}</p>
              </div>
              <div class="bottom"><van-icon name="arrow-down" /></div>
            </div>
          </van-col>
        </van-row>
        <div class="text-content" v-for="(items,i) in item" :key="items.id" v-show="items.active">
          <h3 class="c-title">{{items.name}}</h3>
          <p class="c-mtitle">{{items.title}}</p>
          <div class="t-m" v-html="items.desc"></div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        span:8,
        textShow:false,
        isChoose:'',
        json:[],
        jsonPC:[],
        selectJson:[],
        text:{},
        jsonData:this.$t('gustData')
      }
    },
    created() {
    this.jsonData = this.gustDt;
    },
    methods: {
      toggleText(item,id,index){
        this.jsonData.map((arr) => {
          arr.filter((items) => {
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

    },
    updated(){
      this.jsonData = this.gustDt
    },
    computed:{
      gustDt(){
        var result = [];
        var num = null;
        let isWhat = this.IsPC();
        if(isWhat){//PC 5条一行
          num = 6
          this.span = 4
          // this.span =8
        }else{//Moblie 3条一行
          num = 3
          this.span = 8
        }
        let main = this.$t('gustData');
        for(var i=0;i<main.length;i+=num){
            result.push(main.slice(i,i+num));
        }
        return result
      }
    }
  }
</script>

<style scoped>

.bTitle{
  color:#fff;
}
.organiza{
  padding: .6rem 5px;
}
.item{
  max-width: 3.6rem;
  height: 5.8rem;
  margin: 0 .1rem;
  text-align: center;
  position: relative;
  vertical-align: top;
  background: #fff;
  top: 0;
  background: #ffffff;
  transition: all .3s;
  /* background: linear-gradient(33deg, #b8ccee, #ffffff); */
  /* background: linear-gradient(33deg, #428CA5, #2F4D8A); */
}

.item.active{
  top:-0.4rem;
  background: #ffffff;
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
  /* color: #1d284e; */
  line-height: .36rem;
  /* height: 1.2rem; */
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
  margin-bottom: 15px;
}
.text-content.hiClass{
  opacity: 1;
  transition: all 2s;
}
.c-title{
  font-size: 0.56rem;
  color: #3858bf;
  padding: .22rem 0;
}
.c-mtitle{
  font-size: 0.4rem;
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
}
.item:hover{
  cursor: pointer;
}
.fades-enter-active,
.fades-leave-active {
  transition: all 0.5s;
}
.fades-enter,
.fades-leave-to {
  height: 0;
}

.bTitle::after, .bTitle::before {
    display: block;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    box-sizing: border-box;
    height: 1px;
    border-color: #ffffff;
    border-style: inherit;
    border-width: 3px 0 0;
}
</style>
