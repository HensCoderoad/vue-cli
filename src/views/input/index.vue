<style scoped lang="less">
@import "./index.less";
</style>
<template>
  <div class="container">
    <!-- 校验码页 -->
    <div class="page-input" id="pageInput">
      <!--<img class="top" id="labelImgInput" src="./assets/top.png">-->
      <topSwiper class="top" id="labelImgInput"></topSwiper>
      <div style="height:16px;"></div>
      <div class="title">防伪查询中心</div>
      <div class="line"></div>
      <div class="logisticeCode" id="logisticeCode">{{logisticeCode}}</div>
      <div class="wrap" id="wrap">
        <div class="inputBoxContainer" id="inputBoxContainer">
          <input type="text" class="realInput" v-model="value" maxlength="4" />
          <div class="bogusInput">
            <input type="text" maxlength="4" :value="value[0]" disabled />
            <input type="text" maxlength="4" :value="value[1]" disabled />
            <input type="text" maxlength="4" :value="value[2]" disabled />
            <input type="text" maxlength="4" :value="value[3]" disabled />
          </div>
        </div>
      </div>
      <div class="submit" id="verify" @click="handleClick">查询</div>
    </div>
  </div>
</template>

<script>

import { mapActions, mapMutations } from 'vuex';
import topSwiper from '@/components/banner';

export default {
  name: 'input',
  components: { topSwiper },
  data() {
    return {
      value: '',
      logisticeCode: '080000000001',

    };
  },

  created() {
    this.logisticeCode = this.$route.query.myCode;
  },

  methods: {
    ...mapActions('common', ['getCompanyInfo']),
    ...mapActions('code', ['getCodeInfo']),
    ...mapMutations({
      setEdit: 'edit',
    }),
    handleClick() {
      const that = this;
      const prefix = that.$prefix;
      let checkCode = '';
      if (this.value.length >= 4) {
        checkCode = this.logisticeCode + this.value.substring(0, 4);
        const config = {
          url: `/api/query/${prefix}/${checkCode}`,
          method: 'POST',
          data: checkCode,
        };
        that.getCodeInfo(config).then((result) => {
          that.setEdit(checkCode);
          localStorage.setItem('checkCode', checkCode);
          that.$toast.clear();
          that.$router.push({ path: '/result', query: { myCode: result.status } });
        });
      } else {
        this.$toast('请输入四位验证码');
      }
    },
  },
};
</script>
