import {
  messageBox
} from './global.js'
import axios from 'axios';
// axios配置
let flag;

function ajaxConfig(config, url) {
  let fetcher = axios.create({
    timeout: 60000,
    withCredentials: true,
    ...config
  })
  // 拦截器
  fetcher.interceptors.response.use(response => {
    return response;
  }, err => {
    if (err.response.status == "401" && !flag) {
      flag = true
      alert("超时登录!");
      top.location.href = url;
    }
    return Promise.reject(err);
  })
  return fetcher;
}

// export default 配置线上和开发的url

function ajaxs() {
  let ajaxAPI = {};
  for (let key in process.env.baseApi) {
    ajaxAPI[key] = ajaxConfig({
      baseURL: process.env.baseApi[key]
    }, process.env.loginUrl)
  }
  return ajaxAPI;
}
let fetchers = ajaxs()

// 导出axios实例
export default fetchers
