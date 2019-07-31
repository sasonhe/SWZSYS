  <template>
  <div class="footer container" style="min-height: 6rem;">
    <van-divider :style="{ borderColor: '#263e64'}" class="bTitle fTitle">联系我们</van-divider>
    <van-row>
      <van-col :span="spanFlex">
        <div class="margin-bootm">
          <h3 class="address">地址：坪山区瑞景路36号格兰云天国际酒店</h3>
          <h3 class="address">时间：2019年9月11日-12日</h3>
        </div>
      </van-col>
      <van-col :span="spanFlex">
        <div class="margin-bootm">
          <h3 class="address">参会咨询联系人</h3>
          <h3 class="address">王嫣 13662255195</h3>
          <h3 class="address">王聪 13554997679</h3>
        </div>
      </van-col>
      <van-col :span="spanFlex">
        <div class="margin-bootm">
          <h3 class="address">合作与媒体联系人</h3>
          <h3 class="address">陈春艳 18823370778</h3>
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
  color: #233E53;
  text-align: center;
}
.margin-bootm{
  padding: .2rem .1rem;
  text-align: center;
}
.fTitle{
  /* color: #ffffff; */
  color:#233E53;
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
    border-color: #233E53;
    /* color:#263e64; */
    /* border-style: inherit; */
    border-width:4px 0 0;
    /* border: none; */
}
</style>
