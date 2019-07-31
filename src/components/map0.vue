<template>
    <div class="container amap-page-container">
      <el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-demo">
        <el-amap-marker  :position="markers.position" :events="markers.events" :visible="markers.visible" :draggable="markers.draggable" :vid="0"></el-amap-marker>
        <!-- <el-amap-info-window
            :position="markers.position"
            :content="markers.content"
            :visible="markers.visible"
            :events="markers.events">
          </el-amap-info-window> -->
        </el-amap>
      </el-amap>

    </div>
  </template>

  <style>
    .amap-page-container{
      height: 300px;
    }
    .amap-demo {
      height: 300px;
    }
  </style>

  <script>

    module.exports = {
      name: 'amap-page',
      data() {
        return {
          zoom: 16,
          center:[114.370669, 22.690532],
          markers: {
            position: [114.370669, 22.690532],
            content: '坪山区瑞景路36号格兰云天国际酒店',
            visible: true,
            events: {
              close() {
                console.log(0);
              },
              click: () => {
                alert('click marker');
              }
            }
          },


        };
      },
      methods: {

      }

    };
</script>
