<template>
  <div class="images">
    <ul>
      <li class="listImg" v-for="item in 20" @click="clickView(item)" :key="item">
        <van-image
          width="100%"
          height="100%"
          :src="'./static/pdf/'+item+'.jpg'"
        />
      </li>
    </ul>
    <van-image-preview
        v-model="show"
        :images="arr"
        :startPosition="startPosition"
      >
      </van-image-preview>
  </div>
</template>

<script>
export default {
  data(){
    return{
      index:0,
      show:false,
      startPosition:0,
      arr:[]
    }
  },
  created(){
    this.forData()
  },
  methods:{
    clickView(id){
      this.index = id;
      this.startPosition = id-1;
      this.show = true;
    },
    onChange(index){
      console.log(index);
      this.index = index;
      this.startPosition = index;
    },
    onClickLeft(){
      this.$router.go(-1)
    },
    forData(){
      for (var i = 1; i <= 20; i++) {
        let str = `./static/pdf/${i}.jpg`;
        // let str = `../../static/pdf/${i}.jpg`;
        this.arr.push(str)
      }
    }
  }
}
</script>

<style scoped>
.images .van-nav-bar .van-icon {
    font-size: .46rem;
    color: #fff;
}
.images{

}
.listImg{

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
