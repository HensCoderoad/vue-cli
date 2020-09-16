import { get } from '@/libs/axios';

export default {
  namespaced: true,
  state: {},
  mutations: {},
  getters: {},
  actions: {
    // 微信静默授权认证
    getPrincipal(url, data) {
      return get(url, data);
    },
    auth() {
      const currentUri = document.location.href;
      const redirectUri = encodeURIComponent(currentUri);
      window.location.href = `/api/wechat/auth?scope=snsapi_base&redirectUri=${redirectUri}`;
    },
  },
};
