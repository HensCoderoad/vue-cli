<template>
  <div class="panel-invalid">
    <div class="panel-invalid-title">{{falsePage_text1}}</div>
    <div style="height:32px;"></div>
    <div class="panel-invalid-tips">{{falsePage_text2}}</div>
    <div class="panel-invalid-tips2">{{falsePage_text3}}</div>
  </div>
</template>

<script>
    export default {
        name: "false-tag",
      props: {
        falsePage_text1: {type: String, default: '编码错误'},
        falsePage_text2: {type: String, default: '您输入的编码有误'},
        falsePage_text3: {type: String, default: '货品可疑，谨防假冒'},
      }
    }
</script>

<style scoped>
  .panel-invalid {
    position: absolute;
    top: -90px;
    width: 300px;
    height: 200px;
    left: 50%;
    margin-left: -150px;
    background: url("../assets/tag.png");
    background-size: 100%;
    z-index: 35;
  }
  .panel-invalid-title {
    line-height: 54px;
    padding-top: 16px;
    color: #bd1b2d;
    font-size: 32px;
    text-align: center;
    font-weight: bold;
  }
  .panel-invalid-tips {
    font-size: 18px;
    text-align: center;
    line-height: 32px;
    color: #666;
    font-weight: bold;
  }
  .panel-invalid-tips2 {
    font-size: 18px;
    text-align: center;
    line-height: 22px;
    color: #bd1b2d;
    font-weight: bold;
  }
</style>
