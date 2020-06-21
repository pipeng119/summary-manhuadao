export const HTTP_REQUEST_TIMEOUT = 10000; // 请求默认超时时间 10 秒
export const SUCCESS_CODE = 1; // 请求成功自定义 code
export const ERROR_CODE = 0; // 请求失败自定义 code
export const SERVER_ERROR_CODE = 500;
export const NOT_FOUNT = 404;
export const APP_NAME = 'Hallo 简书';

// 请求地址
export const API_BASE_URL = 'http://localhost:3000/api';
// 错误信息
export const ERROR_INFO = {
  400: '错误请求',
  403: '拒绝访问',
  404: '资源不存在',
  500: '服务器出错啦',
  default: '连接错误'
};
