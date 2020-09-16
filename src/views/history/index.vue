<style scoped lang="less">
@import "./index.less";
</style>
<template>
  <div class="container">
    <div class="line"></div>
    <div class="title">查询记录</div>
    <div class="checkData">
      <div class="data" v-for="(item,index) in list" :key="index">
        <div class="number">{{index-1+2}}</div>
        <div class="info">
          <div>{{item.checkCode}}</div>
          <div>{{item.createTime}}{{item.province||"未知"}}{{item.city}}</div>
        </div>
        <div v-if="selfOrNot(item.unionId)" class="type_self">本人扫码</div>
        <div v-if="!selfOrNot(item.unionId)" class="type_not_self">非本人扫码</div>
      </div>
    </div>
    <div class="tel_num">防伪溯源咨询热线:400-365-818</div>
  </div>
</template>

<script>
export default {
  name: 'history',
  data() {
    return {
      recode: [],
      list: [],
      self_id: '',
    };
  },
  created() {
    this.list = this.$store.state.historyList;
    this.self_id = this.list[this.list.length - 1].unionId;
  },
  computed: {
    selfOrNot() {
      const that = this;
      return function (id) {
        if (id === that.self_id) {
          return true;
        }
        return false;
      };
    },
  },
};
</script>
