import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import state from './state';
import mutations from './mutations';

import code from './modules/code';
import report from './modules/report';
import wechat from './modules/wechat';
import common from './modules/common';
// 挂载Vuex
Vue.use(Vuex);

// 创建VueX对象
const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules: { // 统一请求方法
    code,
    report,
    wechat,
    common,
  },
});

export default store;
