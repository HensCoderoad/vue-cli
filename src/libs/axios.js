import axios from 'axios';
import config from '@/config';
import { getCookieOpenId, setCookiesOpenId } from './utils';

const baseurl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro;
// const baseurl = 'http://a.ahen.club/'
// const openid = 'QG556xZA0a0kan3Q5DRqBJLV_Oc2-TSdo7vChy6jn1s'
axios.defaults.timeout = 15000;
axios.defaults.baseURL = baseurl;
axios.defaults.withCredentials = true;
// http request 拦截器
axios.interceptors.request.use(
  (config) => {
    // 拦截所有请求，对每一个请求封装
    const openid = getCookieOpenId();
    config.data = JSON.stringify(config.data);
    setCookiesOpenId(openid);
    config.headers = {
      'Content-Type': 'application/json;charset=UTF-8',
    };
    return config;
  },
  (error) => Promise.reject(error),
);

// http response 拦截器
axios.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => Promise.reject(error),
);

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, { params })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(
      (response) => {
        resolve(response.data);
      },
      (err) => {
        reject(err);
      },
    );
  });
}

/**
 * 原生自定义
 * @param config
 */
export function define(config = {}) {
  return new Promise((resolve, reject) => {
    axios(config).then(
      (response) => {
        resolve(response.data);
      },
      (err) => {
        reject(err);
      },
    );
  });
}
