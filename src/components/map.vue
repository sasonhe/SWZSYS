<template>
    <div class="container amap-page-container">
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
    .amap-demo,.amap-page-container {
      height: 300px;
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
          zoom: 16,
          center: [114.370669, 22.690532],
          markers: {
            position: [114.370669, 22.690532],
            content: '<p>坪山区瑞景路36号格兰云天国际酒店</p>',
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
        showWind(){
          // this.show = !this.show
          this.show = false;
          this.$nextTick(() => {
            this.show = true;
          });
        }
      }
    };
</script>
