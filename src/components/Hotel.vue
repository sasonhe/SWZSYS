<template>
    <div :class="classObj" style="padding:0">
      <van-nav-bar fixed :z-index="11" :border="false"
        title="酒店指引"
        left-arrow
        @click-left="onClickLeft"
      />
      <el-amap
        vid="amapDemo"
        :center="center"
        :zoom="zoom"
        class="amap-demo">
        <el-amap-marker :position="markers.position" :events="markers.events"></el-amap-marker>
        <el-amap-info-window v-if="show" :position="markers.position" :visible="markers.visible" :content="markers.content"></el-amap-info-window>
      </el-amap>

    </div>
  </template>

  <style scoped>
  .isPc{
    max-width: 1140px;
    margin: 0 auto;
    margin-top: 80px;
    height: 650px;
  }
  .isMobile{
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
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

  <script>
    let self;
    module.exports = {
      data() {
        return {
          zoom: 16,
          center: [114.370669, 22.690532],
          markers: {
            position: [114.370669, 22.690532],
            content: `<p class="nameMap">坪山区瑞景路36号格兰云天国际酒店<a href="https://uri.amap.com/poidetail?poiid=B0FFK4QOGQ&src=mypage&callnative=1">点击详情</a></p>`,
            visible: true,
            events: {
              close() {
                console.log(0);
              },
              click: () => {
                // self.show = !self.show
                self.showWind()
              }
            }
          },
          show: true
        };
      },
      mounted() {
        self = this;
      },
      methods:{
        onClickLeft(){
          this.$router.go(-1)
        },
        showWind(){
          // this.show = !this.show
          this.show = false;
          this.$nextTick(() => {
            this.show = true;
          });
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
          return isWhat ? "isPc" : "isMobile"
        }
      }
    };
</script>
