import { post } from '@/libs/axios';

export default {
  namespaced: true,
  state: {},
  mutations: {},
  getters: {},
  actions: {
    // 图片上传
    upload(data) {
      return post('/api/console/oss/upload', data);
    },

    // 提交举报信息
    submit(url, data) {
      return post(url, data);
    },
  },
};
