<template>
  <div class="position">
    <van-image
      @click="viewImg()"
      width="100%"
      height="100%"
      :src="img"
    />
    <van-image-preview
        v-model="show"
        :images="view"
      >
      </van-image-preview>
  </div>
</template>

<script>
export default {
  data(){
    return{
      show:false,
      img:require('@/assets/myposit/1.jpg'),
      view:[require('@/assets/myposit/2.jpg')]
    }
  },
  methods:{
    viewImg(){
      this.show = true;
    }
  }
}
</script>

<style>

</style>
