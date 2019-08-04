  <template>
  <div class="footer container" style="min-height: 6rem;">
    <van-divider :style="{ borderColor: '#fff'}" class="bTitle fTitle">{{$t('footer.title')}}</van-divider>
    <van-row>
      <van-col :span="spanFlex">
        <div class="margin-bootm">
          <h3 class="address">{{$t('footer.address')}}</h3>
          <h3 class="address">{{$t('footer.time')}}</h3>
        </div>
      </van-col>
      <van-col :span="spanFlex">
        <div class="margin-bootm">
          <h3 class="address">{{$t('footer.tellA.top')}}</h3>
          <h3 class="address">{{$t('footer.tellA.num1')}}</h3>
          <h3 class="address">{{$t('footer.tellA.num2')}}</h3>
        </div>
      </van-col>
      <van-col :span="spanFlex">
        <div class="margin-bootm">
          <h3 class="address">{{$t('footer.tellB.top')}}</h3>
          <h3 class="address">{{$t('footer.tellB.num1')}}</h3>
        </div>
      </van-col>
    </van-row>

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
    methods:{
      IsPC() {
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "iPhone",
                    "SymbianOS", "Windows Phone",
                    "iPad", "iPod"];
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
      spanFlex () {
        let isWhat = this.IsPC()
        return isWhat ? 8 : 24
      }
    }
  }
</script>

<style scoped>
.address{
  font-size: .34rem;
  line-height: .5rem;
  padding: 0;
  /* color:#ffffff; */
  color: #fff;
  text-align: center;
}
.margin-bootm{
  padding: .2rem .1rem;
  text-align: center;
}
.fTitle{
  /* color: #ffffff; */
  color:#fff;
text-align: center;
}
.bTitle::after, .bTitle::before {
    display: block;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 10px;
    border-color: #fff;
    /* color:#263e64; */
    /* border-style: inherit; */
    border-width:4px 0 0;
    /* border: none; */
}
</style>
