<template>
    <div class="container amap-page-container">
      <input type="hidden" name="" :value="$t('map.text')">
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

  <style>
    .container.amap-demo,.container.amap-page-container {
      height: 6rem;
    }

    .prompt {
      background: white;
      width: 100px;
      height: 30px;
      text-align: center;
    }
  </style>

  <script>
    let self;
    module.exports = {
      data() {
        return {
          text:'坪山区瑞景路36号格兰云天国际酒店',
          clicks:'点击详情',
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
      beforeCreate(){
        // self = this;
      },
      mounted() {
        self = this;
      },
      methods:{
        showWind(){
          this.show = false;
          this.$nextTick(() => {
            this.show = true;
          });
        }

      }
    };
</script>
