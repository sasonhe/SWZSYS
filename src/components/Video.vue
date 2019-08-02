<template>
  <div class="video">
    <iframe class="play" src='http://player.youku.com/embed/XNDI3MjM1NDI4MA==' frameborder="0" allowfullscreen='allowfullscreen'></iframe>
  </div>
</template>

<script>
export default {
  data(){
    return{
      // src:require('../../static/video/1.mp4')
    }
  }
}
</script>

<style scoped>
.video{
  width: 100%;
  height: 6rem;
}
.play{
  width: 100%;
  height: 100%;
}
</style>
