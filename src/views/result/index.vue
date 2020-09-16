<style scoped lang="less">
@import "./index.less";
</style>
<template>
  <div class="container">
    <!-- 直接查询页 -->
    <!--正确页面-->
    <div class v-if="truePage" id="pageValid">
      <!--<img class="top" id="labelImg" src="./assets/top.png">-->
      <topSwiper class="top" id="labelImgInput"></topSwiper>
      <div class="panel">
        <div class="title">
          防伪码：
          <span id="code">{{code}}</span>
        </div>
        <div class="highlight">
          <span id="current">{{queryTime}}</span>次
        </div>
        <div class="foot">当前为止查询次数</div>
      </div>
      <resultPageHistory :companyName="'小黄鸭LT DUCK'"></resultPageHistory>
      <div class="inputWrap">鸭鸭好物</div>
      <Recommend></Recommend>
      <div class="footer_tel">
        <img style="height: 100%" src="../../assets/images/query/tel.png" />
        <a href="tel:(86）21-63166063">品牌合作 (86）21-63166063</a>
      </div>
    </div>

    <!--错误页面-->
    <div class id="pageInvalid" v-if="falsePage">
      <img class="top" id="labelImgInvalid" src="../../assets/top.png" />
      <div style="position:relative;">
      <falseTag :falsePage_text1="falsePage_text1" :falsePage_text2="falsePage_text2" :falsePage_text3="falsePage_text3"></falseTag>
      <resultPageReport></resultPageReport>
      </div>
      <div class="rest"></div>
    </div>
  </div>
</template>

<script>
import topSwiper from '@/components/banner';
import resultPageHistory from '@/components/resultpage-history';
import Recommend from '@/components/bottom-goods-recommend';
import falseTag from '@/components/false-tag';
import resultPageReport from '@/components/resultpage-report';
import { mapActions, mapMutations } from 'vuex';

export default {
  name: 'result',
  components: { topSwiper, resultPageHistory, Recommend, falseTag, resultPageReport },
  data() {
    return {
      queryTime: '',
      code: '',
      queryHistory: '',
      prefix: this.$prefix,
      truePage: false,
      falsePage: false,
      falsePage_text1: '编码错误', // 谨防假冒
      falsePage_text2: '您输入的编码有误', // 您所查询的编码已被
      falsePage_text3: '货品可疑，谨防假冒', // 多次查询
      historyList: [],
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    ...mapActions('common', ['getCompanyInfo']),
    ...mapActions('code', ['getHistory']),
    ...mapMutations({
      setEdit: 'edit',
    }),
    loadData() {
      const that = this;
      that.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0,
      });

      if (this.$route.query.myCode !== '5' && this.$route.query.myCode !== '4') {
        const params = {
          prefix: that.$prefix,
          code: this.$store.state.queryCode || localStorage.getItem('checkCode'),
        };
        that.getHistory(params).then((result) => {
          that.$toast.clear();
          that.code = this.$store.state.queryCode || result.data.list[0].checkCode;
          that.historyList = [].concat(result.data.list.reverse());
          that.queryHistory = result.data.list.pop().createTime;
          if (result.data.time === 1) {
            that.queryTime = '首';
          } else {
            that.queryTime = result.data.time;
          }
        });
        // that.$axios.get('/api/query/result', {
        // params: {
        // "prefix": that.$prefix,
        // "code": this.$store.state.queryCode || localStorage.getItem('checkCode') }
        //   }).then(result => {
        //   that.$toast.clear()
        //   that.code = this.$store.state.queryCode || result.data.list[0].checkCode
        //   that.historyList = [].concat(result.data.list.reverse())
        //   that.queryHistory = result.data.list.pop().createTime
        //   if (result.data.time == 1) {
        //     that.queryTime = "首"
        //   } else {
        //     that.queryTime = result.data.time
        //   }
        // })
      }
      // console.log("this.$store.state.queryCode:"+this.$store.state.queryCode)
      const status = this.$route.query.myCode;
      if (!status || status == 0) {
        this.truePage = true;
        this.falsePage = false;
        this.queryTime = '首';
      } else if (status == 1) {
        this.truePage = true;
        this.falsePage = false;
      } else if (status == 4) {
        this.truePage = false;
        this.falsePage = true;
        that.$toast.clear();
        that.falsePage_text1 = '谨防假冒';
        that.falsePage_text2 = '您所查询的编码已被';
        that.falsePage_text3 = '多次查询';
      } else {
        this.truePage = false;
        this.falsePage = true;
        that.$toast.clear();
      }
    },
    handleHistory() {
      this.$store.commit('editHistoryList', this.historyList);
      this.$router.push({ path: '/history' });
    },

  },
};
</script>
