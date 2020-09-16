<template>
  <div style="z-index: 36;margin-top:60px;position: absolute;width:100%">
    <div style="margin-top:65px">
      <div align="center" class="report-tip">如怀疑此货品为假冒产品</div>
      <div align="center" class="report-tip">即可进行举报</div>
    </div>
    <div style="display:flex;padding:12px 36px;">
      <div style="margin:0 auto">
        <div align="center">
          <img class="button-image" src="@/assets/images/report/report.png" />
        </div>
        <div class="item-font" :style="{color:mainColor}" @click="handleReport">点击举报假货</div>
      </div>
    </div>
    <div v-if="gobackButton" class="submit" id="normal" :style="{backgroundColor:mainColor}" @click="handleRecheck">返回首页</div>
  </div>
</template>

<script>
    export default {
      name: "resultpage-report",
      props:{
          gobackButton:{//是否显示返回首页按钮
            type: Boolean,
            default: true
          },
          mainColor:{//按钮、链接的颜色
              type: String,
            default: '#3b210a'
          }
      },
      methods:{
        handleReport() {
          this.$router.push('/report');
        },
        handleRecheck() {
          this.$router.push({ name: 'index', query: { again: true } });
        },
      }
    }
</script>

<style scoped>
  .button-image {
    width: 38px;
  }
  .item-font {
    text-decoration: underline;
    font-size: 21px;
    font-weight: bold;
  }
  .report-tip {
    font-size: 20px;
    color: #d0021b;
    font-weight: bold;
  }
  .submit {
    width: 160px;
    height: 40px;
    line-height: 40px;
    border-radius: 20px;
    margin: 16px auto;
    text-align: center;
    font-size: 18px;
    color: white;
  }
</style>
