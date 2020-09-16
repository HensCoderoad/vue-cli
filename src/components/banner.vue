<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide>
      <a href="https://mp.weixin.qq.com/s/ffSdW6U8KhGMVb__rTmMWg">
        <img src="../assets/images/banner/1.png" />
      </a>
    </swiper-slide>
    <swiper-slide>
      <a href="https://mp.weixin.qq.com/s/3T6Cjao16StSod9GwvC1fw">
        <img src="../assets/images/banner/3.png" />
      </a>
    </swiper-slide>
    <swiper-slide>
      <a href="https://mp.weixin.qq.com/s/iooLl4qJG-bSHaTX_FPMVQ">
        <img src="../assets/images/banner/2.png" />
      </a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
  name: 'top_swiper',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        disableOnInteraction: false,
        autoplay: true,
        pagination: {
          el: '.swiper-pagination',
        },
      },
    };
  },
  created() {

  },
  methods() {

  },
};
</script>

<style scoped>
img {
  width: 100%;
}
</style>
