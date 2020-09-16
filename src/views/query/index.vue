<style scoped lang="less">
@import "./index.less";
</style>
<template>
  <div class="container">
    <!-- 校验码页 -->
    <div class="page-input" id="pageInput">
      <!--轮播图-->
      <topSwiper class="top" id="labelImgInput"></topSwiper>
      <!--图片-->
      <!--<img class="top" id="labelImgInput" src="./assets/top.png">-->
      <div style="height:16px;"></div>
      <div class="title">
        刮开涂层
        <br />扫描二维码查询真伪
      </div>
      <div class="wrap" @click="handleScan" id="wrap">
        <img src="@/assets/images/query/scan.png" />
      </div>
      <!--<div class="inputWrap">-->
      <!--<input class="input" v-model="value" placeholder="刮开涂层，输入16位防伪码查询真伪">-->
      <!--</div>-->
      <div class="inputWrap">LT好物推荐</div>
      <Recommend></Recommend>
      <div class="footer_tel">
        <img style="height: 100%" src="@/assets/images/query/tel.png" />
        <a href="tel:(86）21-63166063">品牌合作 (86）21-63166063</a>
      </div>
      <!--<div class="submit" id="verify" @click="handleClick">查询</div>-->
    </div>
  </div>
</template>

<script>
import topSwiper from '@/components/banner';
import Recommend from '@/components/bottom-goods-recommend';
import { mapActions, mapMutations, mapGetters } from 'vuex';

export default {
  name: 'query',
  components: { topSwiper, Recommend },
  data() {
    return {
      value: '',
      checkCode: '',
      initLength: 2,
    };
  },
  created() {
    // 获取微信jssdk
    this.getJSSDKscript();
    // 获取产品长度来判断是否为物流码，主要获取长度
    this.getCompany();
  },
  computed: {
    ...mapGetters(['code', 'prefix', 'queryCode', 'historyList']),
  },
  methods: {
    ...mapActions('common', ['getCompanyInfo']),
    ...mapActions('code', ['getCodeInfo']),
    ...mapMutations({
      setEdit: 'edit',
    }),
    // 获取JSSDK，并添加到script
    getJSSDKscript() {
      const ts = new Date().getTime();
      const s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = `http://a.ahen.club/api/wechat/jssdkConfig?callback=wx.config&ts=${ts}`;
      document.body.appendChild(s);
    },

    // 防伪查询
    handleClick() {
      const that = this;
      const { prefix } = that;
      const code = that.value;
      if (!code) {
        that.$toast('请填写防伪码!');
      } else {
        that.$toast.loading({
          message: '加载中...',
          forbidClick: true,
          duration: 0,
        });
        // 物流码跳转
        if (code.length === 10 + that.initLength) {
          that.$toast.clear();
          that.$router.push({ path: '/input', query: { myCode: code } });
        }
        const config = {
          url: `/api/query/${prefix}/${code}`,
          method: 'POST',
          data: code,
        };
        that.getCodeInfo(config).then((result) => {
          that.setEdit(code);
          localStorage.setItem('checkCode', code);

          that.$toast.clear();
          that.$router.push({ path: '/result', query: { myCode: result.status } });
        });
      }
    },

    handleScan() {
      const that = this;
      wx.ready(() => {
        wx.scanQRCode({
          needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
          scanType: ['qrCode', 'barCode'], // 可以指定扫二维码还是一维码，默认二者都有
          success(res) {
            const result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果\
            that.value = result.split('/')[result.split('/').length - 1];
            that.handleClick();
          },
          fail(err) {
            console.log('scan err:', err);
          },
        });
      });
      wx.error((res) => {
        alert(`config信息验证失败!${window.location.href}`);
        console.log(res);
      });
    },

    getCompany() {
      const prefix = this.$prefix ; //const { prefix } = this;
      const that = this;
      this.getCompanyInfo( {'prefix' : this.$prefix} ).then((res) => { // { prefix }
        that.initLength = res.num;
      });
    },
  },

};
</script>
