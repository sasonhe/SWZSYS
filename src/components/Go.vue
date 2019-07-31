<template>
  <div class="container">
    <div class="btn" @click="goToPage()">
      <div class="name">参会指引</div>
      <van-icon name="arrow" class="arrow-btn" />
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
      goToPage(){
        this.$router.push({
          path: '/GoMap'
        });
      }
    }
  }
</script>

<style scoped>
.btn{
  width: 4.8rem;
  height: 1.6rem;
  background: #efc44a;
  border-radius: 1rem;;
  position: relative;
  margin:0 auto;
  cursor: pointer;
}
.name{
  line-height: 1.6rem;
  text-align: center;
  font-size: .46rem;
  font-weight: 400;
  color: #1d4f4f;
  padding-right: .3rem;
}
.arrow-btn{
  font-weight: bold;
  font-size: .5rem;
  position: absolute;
  line-height: 1.6rem;
  color: #1d4f4f;
  height: 1.6rem;
  top: 50%;
  right: .66rem;
  margin-top: -0.8rem;
}
</style>
