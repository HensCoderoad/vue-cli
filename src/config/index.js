const config = {
  baseUrl: {
    dev: 'http://localhost:10010/',//http://a.yunmawl.cn
    pro: 'http://a.yunmawl.cn/',//http://a.yunmawl.cn//http://a.dxunt315.com/
  },
};
config.url = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro;
export default config;
