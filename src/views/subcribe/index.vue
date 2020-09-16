<style scoped lang="less">
@import "./index.less";
</style>
<template>
  <div class="container">
    <topSwiper class="top" id="labelImgInput"></topSwiper>
    <div class="mid">
      <img src="../../assets/images/subcribe/mid.png" />
      <!--<img src="./assets/ca5e59530933a3ebae6f40de16f3857.jpg">-->
    </div>
    <div class="inputWrap">鸭鸭好物</div>
    <div class="footer_img">
      <a href="https://item.jd.com/26195885376.html">
        <img src="../../assets/images/query/kt.png" />
      </a>
      <a href="https://item.jd.com/27525306058.html">
        <img src="../../assets/images/query/bz.png" />
      </a>
      <a href="https://item.jd.com/14810990380.html">
        <img src="../../assets/images/query/bb.png" />
      </a>
      <a href="https://item.jd.com/28290537977.html">
        <img src="../../assets/images/query/yy.png" />
      </a>
    </div>
    <div class="footer_tel">
      <img style="height: 100%" src="../../assets/images/query/tel.png" />
      <a href="tel:(86）21-63166063">品牌合作 (86）21-63166063</a>
    </div>
  </div>
</template>

<script>
import topSwiper from '@/components/banner';

export default {
  name: 'subcribe',
  components: {
    topSwiper,
  },
};
</script>
