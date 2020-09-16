import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import { getCookieOpenId } from '@/libs/utils';
import routes from './routers';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  let { openid } = store.state;
  if (getCookieOpenId()) {
    openid = getCookieOpenId();
    store.state.openid = openid;
  }

  if (openid) {
    next();
  } else {
    const currentUri = document.location.href;
    const redirectUri = encodeURIComponent(currentUri);
    window.location.href = `/api/wechat/auth?scope=snsapi_base&redirectUri=${redirectUri}`;
  }
});

export default router;
