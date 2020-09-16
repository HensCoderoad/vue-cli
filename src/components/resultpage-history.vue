<template>
  <div class="tips">
    您所查询的产品为{{companyName}}正版商品，感谢查询，祝您生活愉快！
    <br />
    <div class="check_history" v-if="historyList.length>1">
      查询记录：
      <div class="recode" v-for="(item,index) in historyList"  :key="index">
        {{item.createTime+" "}}{{index==0?"首":index+1}}次查询时间</div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "resultpage-history",
      props:{
          companyName:{
            type: String,
            default: ""
          },
          historyList:{
            type: Array,
            default: []
          }
      }
    }
</script>

<style scoped>
  .tips {
    font-size: 16px;
    color: #666;
    width: 85%;
    margin: 0 auto;
  }
  .check_history {
    height: 105px;
    overflow: scroll;
  }
</style>
