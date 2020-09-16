import { get, define } from '@/libs/axios';

export default {
  namespaced: true,
  state: {},
  mutations: {},
  getters: {},
  actions: {
    // 获取编码信息，产品信息，以及对物流码初步校验
    getCodeInfo(config) {
      return define(config);
    },

    // 获取编码查询历史
    getHistory(data) {
      return get('/api/query/result', data);
    },
  },
};
