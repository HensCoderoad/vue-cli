<style scoped lang="less">
@import "./index.less";
</style>
<template>
  <div class="result_content" id="result_content">
    <img class="top" src="@/assets/images/tips/success.png" />
    <div align="center" class="text1" @click="handleFinish">完成举报</div>
    <div align="center">
      <div class="tips">感谢你的举报，为保证您的权益，请保持电话畅通，我司将有专业客服人员与您取得联系，祝您生活愉快！</div>
    </div>
    <div class="inputWrap">鸭鸭好物</div>
    <div class="footer_img">
      <a href="https://item.jd.com/26195885376.html">
        <img src="../../assets/images/query/kt.png" />
      </a>
      <a href="https://item.jd.com/27525306058.html">
        <img src="../..//assets/images/query/bz.png" />
      </a>
    </div>
    <div class="footer_img">
      <a href="https://item.jd.com/14810990380.html">
        <img src="../..//assets/images/query/bb.png" />
      </a>
      <a href="https://item.jd.com/28290537977.html">
        <img src="../..//assets/images/query/yy.png" />
      </a>
    </div>
    <div class="footer_tel">
      <img style="height: 100%" src="../..//assets/images/query/tel.png" />
      <a href="tel:(86）21-63166063">品牌合作 (86）21-63166063</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tips',
  methods: {
    handleFinish() {
      this.$router.push('/');
    },
  },
};
</script>
