import Vue from 'vue';
import Vant from 'vant';
import App from './App.vue';
import router from './router';
import store from './store';
import 'vant/lib/index.css';
// import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper';

// import style
import 'swiper/css/swiper.css';

Vue.use(VueAwesomeSwiper /* { default options with global component } */);
Vue.use(Vant);

// axios.defaults.baseURL = 'http://c.dxunt315.com/' // http://a.yunmawl.cn//http://228543x76i.iok.la//http://hr8qw4.natappfree.cc
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'// 设置请求数据格式
// axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded'
// axios.defaults.withCredentials = true
// Vue.prototype.$axios = axios
Vue.config.productionTip = false;

// 存储当前公司名
Vue.prototype.$prefix = 'lebiao';

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
