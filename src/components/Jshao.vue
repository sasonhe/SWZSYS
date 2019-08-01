<template>
  <div class="container">
    <!-- 介绍 -->
    <van-divider :style="{ borderColor: '#263e64'}" class="bTitle" style="font-size:.48rem;">{{this.$t('jshao.title')}}</van-divider>
    <div class="content1">
      <div class="desc">
        <p class="text-indent">{{this.$t('jshao.text1')}}</p>
        <p class="text-indent">{{this.$t('jshao.text2')}}</p>
        <p class="text-indent">{{this.$t('jshao.text3')}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    created() {
    },
    methods: {
    }
  }
</script>

<style scoped>
.content1{
  /* background: red; */
  padding: 0 .8rem;
}
.desc{
  font-size: .28rem;
  color: #263e64;
  line-height: .7rem;
}
.desc p{
  margin:0;
  font-size: .28rem;
}
.mTitle{
  text-align: center;
}
</style>
