<template>
  <div class="footer_img">
    <a :href="goods1_ulr">
      <img src="@/assets/images/query/kt.png" />
    </a>
    <a :href="goods2_ulr">
      <img src="@/assets/images/query/bz.png" />
    </a>
    <a :href="goods3_ulr">
      <img src="@/assets/images/query/bb.png" />
    </a>
    <a :href="goods4_ulr">
      <img src="@/assets/images/query/yy.png" />
    </a>
  </div>
</template>

<script>
    export default {
        name: "bottom-goods-recommend",
      props:{
            goods1_ulr:{type: String, default:"https://item.jd.com/26195885376.html"},
            goods2_ulr:{type: String, default:"https://item.jd.com/27525306058.html"},
            goods3_ulr:{type: String, default:"https://item.jd.com/14810990380.html"},
            goods4_ulr:{type: String, default:"https://item.jd.com/28290537977.html"},
      }
    }
</script>

<style scoped>

  .footer_img {
    position: relative;
    display: flex;
    width: 100%;
  }
  .footer_img > a {
    width: 21%;
    height: 100%;
    margin: 0 auto;
    flex-shrink: 0;
  }
  .footer_img > a > img {
    width: 100%;
  }
</style>
