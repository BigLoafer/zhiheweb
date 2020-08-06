import axios from 'axios';
import { getMethodParams, postMethodParams } from './ajaxCommonParams';

const httpInstance = axios.create();

const baseUrl = process.env.SP_ENV == 'dev'?'http://localhost:4000/':'';

const http = {
  post(url, data) {
    return httpInstance({
      method: 'post',
      url: `${url}`,
      data,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  },
  get(url, params) {
    return httpInstance({
      method: 'get',
      url: `${url}`,
      params,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    });
  }
};

httpInstance.interceptors.request.use(
  config => {
    if (config.method == 'post') {
      let ajaxCommonStr = postMethodParams();
      let url = config.url;
      if (url.split('?').length == 1 && ajaxCommonStr) {
        config.url = url + '?' + ajaxCommonStr;
      } else if (ajaxCommonStr) {
        config.url = url + '&' + ajaxCommonStr;
      }
    } else if (config.method == 'get') {
      let ajaxCommonParams = getMethodParams();
      config.params = {
        ...ajaxCommonParams,
        ...config.params
      };
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

httpInstance.interceptors.response.use(
  res => {
    return Promise.resolve(res);
  },
  error => {

    // if (error.response.data.code == 4005) {
    // }
    // if (error.response.data.code == 1006) {
    // }
    // let errorMsgText = '系统忙不过来啦，稍等一下';
    // if (!error.response.data) {
    //   error.response = {
    //     data: {
    //       message: errorMsgText
    //     }
    //   };
    // } else if (!error.response.data.message) {
    //   error.response.data.message = errorMsgText;
    // }
    return Promise.reject(error);
  }
);

export default http;
