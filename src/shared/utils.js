import path from 'path';

// 正则匹配
let Pattern = {
  isEmpty: /(^\s*)|(\s*$)/g,
  isMobile: /^1[3456789]\d{9}$/,
  isCnAndEn: /^[\u4E00-\u9FA5]+$/,
  isCnAndEnAndNum: /^[\u4e00-\u9fa5-a-zA-Z0-9]+$/,
  isUserName: /^[(\u4e00-\u9fa5)a-zA-Z]+$/,
  isPassword: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/,
  isAuthCode: /^[0-9]{4}$/,
  isTelAndMobile: /^(1[3|4|5|7|8][\d]{9}|0[\d]{2,3}-[\d]{7,8}|400[-]?[\d]{3}[-]?[\d]{4})$/,
  // eslint-disable-next-line no-useless-escape
  isEmail: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
};

/**
 * 执行正则表达式
 * @param pattern 校验的正则表达式
 * @param strValue 校验的值
 * @returns {boolean}
 */
export const executeExp = (pattern, strValue) => {
  return pattern.test(strValue);
};

/**
 * 判断字符串是否为空
 * @param strValue 校验的值
 * @returns {boolean}
 */
export const isEmpty = (strValue) => {
  if (!strValue) strValue = '';
  strValue = strValue.replace(Pattern.isEmpty, '');
  return strValue.length === 0;
};

/**
 * 判断是否为手机号码
 * @param strValue 校验的值
 * @returns {boolean}
 */
export const isMobilePhone = (strValue) => {
  if (isEmpty(strValue)) return false;
  return executeExp(Pattern.isMobile, strValue);
};

/**
 * jsonp
 * @param {*} params
 */
export const jsonp = (params) => {
  if (!params.url) {
    return;
  }
  // 超时时间，默认为15s
  params.timeout = params.timeout || 15000;

  let queryStr = '&';
  for (let key in params.data) {
    queryStr += `${key}=${params.data[key]}&`;
  }
  params.url += queryStr;
  let jsonpCallback = `callback_${Math.random().toString().substr(4)}`;
  params.url = `${params.url}callback=${jsonpCallback}`;

  let script = document.createElement('script');
  script.src = params.url;
  script.id = jsonpCallback;

  let oHead = document.getElementsByTagName('head')[0];
  oHead.appendChild(script);
  let timer = setTimeout(() => {
    window[jsonpCallback] = null;
    params.error && params.error('网络超时！');
  }, params.timeout);

  window[jsonpCallback] = (res) => {
    clearTimeout(timer);
    let rmDom = document.getElementById(jsonpCallback);
    oHead.removeChild(rmDom);
    params.success && params.success(res);
  }
};

/**
 * 获取嵌套调用的属性值
 * @param source
 * @param path
 * @param defaultValue
 * @returns {undefined|*}
 * @private
 */
export const _get = (source, path = null, defaultValue = null) => {
  let result = source;
  if (path) {
    const paths = path.replace(/\[(\d+)\]/g, '.$1').split('.');
    for (const p of paths) {
      result = Object(result)[p];
      if (result === undefined || result === null || result === '' ||
        result === 'undefined' || result === 'null') {
        return defaultValue;
      }
    }
  } else {
    if (result === undefined || result === null || result === '' ||
      result === 'undefined' || result === 'null') {
      return defaultValue;
    }
  }
  return result;
};

/**
 * 节流函数
 * @param func 函数
 * @param delay 延迟时间，单位毫秒
 * @returns {Function}
 */
export const throttle = (func, delay = 250) => {
  let timer = null;
  let startTime = Date.now();
  return function() {
    let curTime = Date.now();
    let remaining = delay - (curTime - startTime);
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    if (remaining <= 0) {
      func.apply(context, args);
      startTime = Date.now();
    } else {
      timer = setTimeout(func, remaining);
    }
  }
};

/**
 * 防抖函数
 * @param {*} fn 函数
 * @param {*} delay 延迟时间, 默认为500毫秒
 * @param {*} immediate 是否立即执行，默认为false
 */
export const debounce = (fn, delay = 500, immediate = false) => {
  let timer, result
  // 这里不能使用箭头函数，不然 this 依然会指向 Windows对象
  // 使用rest参数，获取函数的多余参数
  const debounced = function(...args) {
    if (timer) clearTimeout(timer)
    // 回调函数执行的时机
    if (immediate) {
      // 是否已经执行过
      // 执行过，则timer指向定时器对象，callNow 为 false
      // 未执行，则timer 为 null，callNow 为 true
      const callNow = !timer
      // 设置延时
      timer = setTimeout(() => {
        timer = null
      }, delay)
      if (callNow) result = fn.apply(this, args)
    } else {
      // 停止调用后delay时间才执行回调函数
      timer = setTimeout(() => {
        fn.apply(this, args)
      }, delay)
    }
    return result
  }

  // 取消操作
  debounced.cancel = () => {
    clearTimeout(timer)
    timer = null
  }

  return debounced
}

export const omit = (obj, uselessKeys) => {
  uselessKeys.forEach(key => {
    obj[key] && delete obj[key]
  })
  return obj
}

export const pick = (obj, useKeys) => {
  let result = {}
  useKeys.forEach(key => {
    result[key] = obj[key]
  })
  return result
}

export const autoLoadFile = (files) => {
  const tree = {};

  files.keys().map(file => {
    if (path.extname(file) === '.js') {
      // file.replace(/(\.\/|\.js)/g, '');
      tree[path.basename(file, '.js')] = files(file).default;
    }
  });

  return tree;
};
