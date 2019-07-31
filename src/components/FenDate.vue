<template>
<div class="container maxH" style="padding:0;">
  <van-divider :style="{ borderColor: '#263e64'}" class="bTitle">峰会议程</van-divider>
  <van-tabs class="tab" v-model="active" animated swipeable :offset-top="76" :border="false" background="#00A2E9" color="#fff" title-inactive-color="#BBDBF3" title-active-color="#fff" line-width="0">
    <van-tab  v-for="(name,n) in fenData" :key="n" :title="name.name">
      <div style="padding:.4rem;" class="scrollH">
        <div class="flex fenTitle" v-for="(title,nd) in name.title" :key="nd">
          <div class="item-flex-left timeTitle">{{title | left(title)}}</div>
          <div class="item-flex-right timeTitle">{{title | right(title)}}</div>
        </div>
        <van-steps v-if="name.type == 666" direction="vertical" :active="null">
          <van-step v-for="(item,index) in name.main" :key="index">
            <div class="flex-wrapper">
              <div class="flex-left">
                <h3 class="zTitle">{{item.time}}</h3>
              </div>
              <div class="flex-right">
                <p class="nameTitle color-B" v-for="(items,i) in item.content" :key="i+items">{{items}}</p>
                <p class="nameTitle  color-B" v-for="(gust,ides) in item.gust" :key="ides">{{gust}}</p>
              </div>
            </div>
          </van-step>
        </van-steps>
        <van-steps v-else direction="vertical" :active="null">
          <van-step v-for="(item,index) in name.main" :key="index">
            <div class="flex-wrapper">
              <div class="flex-left">
                <h3 class="zTitle">{{item.time}}</h3>
              </div>
              <div class="flex-right">
                <p class="nameTitle color-B" v-for="(items,i) in item.dev" :key="i">{{items}}</p>
              </div>
            </div>
          </van-step>
        </van-steps>
      </div>
    </van-tab>
  </van-tabs>

</div>
</template>

<script>
export default {
  data() {
    return {
      active:0,
      fenData:[
        {
          id:0,
          type:666,
          name:"主会场议程",
          title:[],
          main:[
            {
              id:1,
              time:'09:00-09:30',
              content:["嘉宾签到","播放暖场宣传片"],
              gust:[]
            },
            {
              id:2,
              time:'09:30-09:55',
              content:['领导致辞'],
              gust:["国家卫健委领导","市领导","区领导"]
            },
            {
              id:3,
              time:'09:55-10:10',
              content:["中科院上海药研所坪山安评中心项目签约仪式","中科院上海药研所"],
              gust:["深圳市坪山区人民政府"]
            },
            {
              id:4,
              time:'10:10-10:25',
              content:["主旨演讲（一）","全球生物科技发展状况及趋势"],
              gust:["Aaron Ciechanover教授","2004 年诺贝尔奖化学奖得主"]
            },
            {
              id:5,
              time:'10:25-10:35',
              content:["主旨演讲（二）","主题待定"],
              gust:["李青","国家卫生健康委医药卫生科技发展研究中心主任"]
            },
            {
              id:6,
              time:'10:35-10:45',
              content:["主旨演讲（三）","粤港澳大湾区深港联动的机遇"],
              gust:["谭铁牛", "香港中联办副主任，中国科学院院士，英国皇家工程院外籍院士"]
            },
            {
              id:7,
              time:'10:45-11:35',
              content:["校长论坛","中国生命科学和创新科技发展"],
              gust:["1、施一公", "中国科学院院士，美国国家科学院院士，西湖大学校长","2、詹启敏","中国科学院院士, 北京大学深圳研究院院长","3、卢煜明","香港中文大学医学院副院长，美国科学院外籍院士","4、徐扬生","中国工程院院士，香港中文大学（深圳）校长","5、卫炳江","香港理工大学副校长","6、饶毅","首都医科大学校长（拟）","7、刘良","澳门科技大学校长（拟）"]
            },
            {
              id:8,
              time:'11:35-12:35',
              content:["主题讨论（一）","粤港澳生物医药产业创新合作区如何创新驱动发展（政策、人才、临床、标准等）"],
              gust:["1、曹京华","中科院香港创新院筹建组联合组长，一带一路科学组织联盟秘书处执行主任","2、姚毅","前美国FDA资深临床审批官","3、钟伟强","香港创新及科技局副局长","4、宋瑞霖","中国医药创新促进会会长","5、邱宣","深圳科创委党组书记","6、陈华平","坪山区副区长（拟主持）","7、Stine Kirstein Junge","联合国开发计划署北欧代表办公室","可持续发展目标加速器倡议负责人"]
            },
            {
              id:9,
              time:'12:35-14:30',
              content:["午餐、自由交流"],
              gust:[]
            },
            {
              id:10,
              time:'14:30-16:00',
              content:["主题讨论（二）","1、中国生物科技公司走向全球化","2、粤港澳大湾区与创新驱动下的成果转化"],
              gust:["1、王晓东 美国国家科学院院士，北京生命科学研究所所长","2、李小加 香港交易所行政总裁","3、阙波 上海证券交易所副总经理","4、鲁先平 深圳微芯生物科技有限公司董事、总裁兼首席科学官","5、田源 元明资本董事长（拟主持）","6、Nisa Leung（梁颖宇） 启明创投主管合伙人"]
            },
            {
              id:11,
              time:'16:00-17:30',
              content:["主题讨论（三）","科技创新与医学进步：新兴信息技术对生物医药产业的推动"],
              gust:["1、Jean-Pierre CAZENAVE（吉恩·皮埃尔·卡泽纳夫）法国国家医学科学院院士","2、卢毓琳 香港生物医药创新协会会长，香港科技大学荣誉院士","3、胡章宏 大湾区共同家园投资有限公司总裁","4、Simon Kos 微软全球健康部首席医学官","5、袁庆 万乐药业总经理（拟主持）","6、罗飞 H50轮值主席，松禾资本董事长","7、Sharon Chan 强生JLABS上海负责人"]
            },
            {
              id:12,
              time:'17:30-18:00',
              content:["自由交流"],
              gust:[]
            }
          ]
        },
        {
          id:1,
          name:"分会场 ( 一 )",
          title:["主题：“生物医药/医疗器械”项目路演","领域：智慧医疗、精准医学、生物制药","承办单位：投壶网、E99联盟","规模：约100人"],
          main:[
            {
              time:"14:00-14:10",
              dev:["主办方致欢迎辞"]
            },
            {
              time:"14:10-14:30",
              dev:["1、主题分享：","全球科技创新下的中国生物医药产业","2、拟邀嘉宾：","仙瞳资本董事长 刘牧龙","倚锋资本创始人 朱晋桥","融昱资本业务合伙人 张颢腾"]
            },
            {
              time:"14:30-15:30",
              dev:["1、项目路演：","生物制药及智慧医疗项目路演（4-6个项目）","2、拟邀请项目：","一、天辰医疗","二、恩多克医疗","三、贝美药业","四、天蓝生物"]
            },
            {
              time:"15:30-15:40",
              dev:["项目点评"]
            },
            {
              time:"15:40-16:00",
              dev:["1、主题分享：","精准医学与生物技术创新","2、拟邀嘉宾：","深圳瑞享源基金创始合伙人 肖卫民","深圳市因诺转化医学研究院执行院长 王明军"]
            },
            {
              time:"16:00-17:00",
              dev:["1、项目路演：","国际精准医学项目路演（4个项目）","2、拟邀请项目：","五、力泰克科技","六、睿瀚医疗","七、深伦生物","八、臻质医疗"]
            },
            {
              time:"17:00-17:10",
              dev:["项目点评","拟邀嘉宾：","瑞享源基金创始合伙人肖卫民","青橙资本合伙人 张云鹏","融昱资本业务合伙人张颢腾","倍数资本创始合伙人 王阳","国科嘉和投资总监 钟靖","仙瞳资本投资总监 孙洪源","倚锋资本董事总经理 雒法涌","澳银资本投资总监 张亦笑"]
            }
          ]
        },
        {
          id:2,
          name:"分会场 ( 二 )",
          title:["主题：“妇幼医疗与生命健康","领域：医学影像、体外诊断、健康管理","承办单位：邦勤资本","规模：约200人"],
          main:[
            {
              time:"13:00-13:30",
              dev:["签到、入场"]
            },
            {
              time:"13:30-13:40",
              dev:["主办方致欢迎辞，并介绍嘉宾"]
            },
            {
              time:"13:40-14:10",
              dev:["中国工程院院士 蒋庄德 教授"]
            },
            {
              time:"14:10-14:15",
              dev:["慈铭健康集团（上市公司） 韩小红博士"]
            },
            {
              time:"14:15-14:35",
              dev:["中国食品药品检定研究院主任 任海萍博士"]
            },
            {
              time:"14:35-15:15",
              dev:["妇幼生殖专家 （2名）"]
            },
            {
              time:"15:15-15:35",
              dev:["西安天隆科技有限公司 董事长 彭年才博士"]
            },
            {
              time:"15:35-15:55",
              dev:["深圳理邦智慧健康发展有限公司总经理 孔令锋 先生"]
            },
            {
              time:"15:55-16:15",
              dev:["茶歇/自由交流"]
            },
            {
              time:"16:15-17:15",
              dev:["项目路演  8分钟/家","赛雷纳（中国）医疗科技有限公司 张海川博士","深圳达盟生物科技有限公司 张崧先生","力盟生命科技(深圳)有限公司 刘湘娟女士","深圳恩多克医疗有限公司 牛会甫先生","深圳市嘉骏实业有限公司 蔡春辉先生","深圳市辰纳生物科技有限公司 于琴女士","深圳市有玺医疗科技有限公司 张楠女士"]
            },
            {
              time:"17:15-17:35",
              dev:["项目点评"]
            },
            {
              time:"17:35-17:45",
              dev:["主持人总结，结束"]
            }

          ]
        },
        {
          id:3,
          name:"分会场 ( 三 )",
          title:["主题：2019生物医药产业研发转化湾区研讨会","领域：生物医药","承办单位：深圳市生物医药促进会、广东医谷、坪山生物医药研发转化中心","规模：约100人"],
          main:[
            {
              time:"14:00-14:10",
              dev:["主办方致欢迎辞"]
            },
            {
              time:"14:10-14:40",
              dev:["政府领导发言（2位）"]
            },
            {
              time:"14:40-14:55",
              dev:["主题分享","韩忠朝 法国国家医学科学院院士"]
            },
            {
              time:"14:55-15:10",
              dev:["主题分享","李志成 香港浸会大学教授，香港浸会大学深圳研究院副院长"]
            },
            {
              time:"15:10-15:25",
              dev:["主题分享","孙飞 香港科技大学教授"]
            },
            {
              time:"15:25-15:40",
              dev:["主题分享","李笑宇 香港大学教授"]
            },
            {
              time:"15:40-15:55",
              dev:["茶歇"]
            },
            {
              time:"15:55-16:10",
              dev:["主题分享","夏江 香港中文大学生命科学学院教授"]
            },
            {
              time:"16:10-16:25",
              dev:["主题分享","郑颖 澳门大学中华医药研究院中药质量研究国家重点实验室教授"]
            },
            {
              time:"16:25-16:40",
              dev:["主题分享","李子刚 北京大学深圳研究生院化学生物学与生物技术学院课题组组长、特聘研究员"]
            },
            {
              time:"16:40-16:55",
              dev:["主题分享","范建兵 国家“千人计划”特聘专家，基准医疗创始人兼CEO"]
            },
            {
              time:"16:55-17:10",
              dev:["主题分享","王国新 深圳清华大学研究院等离子体纳米生物芯片中心副主任，深圳无微华斯生物科技有限公司总经理"]
            },
            {
              time:"17:10-17:40",
              dev:["提问探讨"]
            },
            {
              time:"17:40-18:00",
              dev:["自由交流、项目对接"]
            }
          ]
        },
      ]
    }
  },
  created() {},
  methods: {},
  filters:{
    left(value,n){
      let arr = value.split('：');
      return arr[0]
    },
    right(value,n){
      let arr = value.split('：');
      return arr[1]
    }
  }
}
</script>

<style>
.maxH .tab .van-tab{
  border: 1px solid #fff;
  border-left: none;
}
.flex-wrapper{
  display: flex;
}
.flex-left{
  padding-left: .2rem;
  flex: 0 0 3rem;
}
.flex-right{
  flex: 1;
}
.maxH .van-step--vertical:first-child::before{
  background-color: #00a2e9;
}
.scrollH{
  height: 15rem;
    overflow-y:scroll;
}
.van-step__circle{
  background-color: #0788c6;
}
[class*=van-hairline]::after{
  border-color: #00a2e9;
}
.van-step__line {
  background-color: #00a2e9;
}
.van-tabs--line .van-tabs__wrap{
  height: .88rem
}
.van-tab{
  font-size: .34rem;
  font-weight: bold;
  line-height: .88rem;
}
.maxH .van-tabs__content{
  background: #044F9F;
}
.fenTitle .timeTitle{
  font-size: .4rem;
  font-weight: 600;
  color: #ffffff;
  padding-bottom: .2rem;
}
.van-steps{
  background-color: rgba(0,0,0,0) !important;
}
.zTitle{
  display: inline-block;
  color: #fff;
  font-size: .34rem;
  font-weight: bold;
  text-align: center;
  padding: 0 .12rem;
  height: .68rem;
  line-height: .68rem;
  background: #0788c6;
  border-radius: .42rem;
}
.nameTitle{
  font-size: .36rem;
  font-weight: bold;
  line-height: .46rem;
  margin-bottom: .2rem;
  margin-top:.1rem;
}
.van-steps--vertical {
  padding: 0 0 0 24px;
}

.flex {
  display: flex;
}
.flex .item-flex-left {
  padding-right: .34rem;
  flex: 2rem 0 0;
  text-align: justify;
  -moz-text-align-last: justify;
  -webkit-text-align-last: justify;
  text-align-last: justify;
}
.flex .item-flex-right {
  flex: 1;
}
.color-A{
  color: #0788c6;
}
.color-B{
  color: #fff;
}
.bTitle::after, .bTitle::before {
    display: block;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 10px;
    border-color: red;
    /* border-color: #263e64; */
    /* color:#263e64; */
    /* border-style: inherit; */
    border-width:4px 0 0;
    /* border: none; */

}
</style>
