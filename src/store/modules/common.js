import { get } from '@/libs/axios';

export default {
  namespaced: true,
  state: {},
  mutations: {},
  getters: {},
  actions: {
    getCompanyInfo(data) {
      return get('/api/console/company/get', data);
    },
  },
};
