import axios from 'axios'
import {
    HTTP_REQUEST_TIMEOUT,
    API_BASE_URL,
    ERROR_CODE
} from '@/config/httpConfig'
import {
    Progress
} from 'ant-design-vue';
import {
    _get
} from '@/shared/utils';

class HttpRequest {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
        // 缓存队列
        this.queue = {}
    }

    /**
     * 初始化配置
     * @return {{headers: {"Content-Type":string},baseURL: *,timeout: number}}
     */
    initConfig() {
        return {
            baseURL: this.baseUrl,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            timeout: HTTP_REQUEST_TIMEOUT,
        }
    }

    /**
     * 格式化url地址
     * @param {*} config 配置信息
     */
    formateQueueUrl(config) {
        let {
            url,
            params,
            data
        } = config
        return config.method === 'get' ? encodeURIComponent(`${url}${JSON.stringify(params)}`) : encodeURIComponent(`${url}${JSON.stringify(data)}`)
    }

    /**
     * 取消请求
     * @param {*} url 请求地址
     * @param {*} isCanel 
     */
    destroy(url, isCanel = true) {
        if (this.queue[url] && isCanel) this.queue[url]()

        Reflect.deleteProperty(this.queue, url)
        if (Object.keys(this.queue).length) {
            // code....
        }
    }

    /**
     * 请求拦截
     * @param {*} instance axios实例
     * @param {*} url 请求地址
     */
    interceptors(instance, url) {
        let queueUrl = url

        // 请求拦截
        instance.interceptors.request.use(config => {
            // queueUrl = this.formateQueueUrl(config);
            this.destroy(queueUrl, true);

            config.cancaleToken = new axios.CancelToken(cancel => this.queue[queueUrl] = cancel)

            return config
        }, err => {
            let msg = err.message || '网络错误'
            return Progress.reject({
                code: 0,
                msg
            })
        })

        // 响应拦截
        instance.interceptors.response.use(res => {
            queueUrl = this.formateQueueUrl(res.config)
            this.destroy(queueUrl)

            const {
                data,
                status
            } = res

            return status === 200 ?
                Promise.resolve(data) : Promise.reject(data)

        }, err => {
            this.destroy(queueUrl);
            return Promise.reject(err)
        })
    }

    /**
     * 发起请求
     * @param {*} options 请求参数
     */
    request(options) {
        const instance = axios.create()

        // 请求超时时间，有则覆盖默认的
        let timeout = _get(options, 'data.timeout', _get(options, 'params.timeout', null));
        if (timeout) options.timeout = timeout

        options = Object.assign(this.initConfig(), options)
        this.interceptors(instance, options.url)

        return new Promise(reslove => {
            instance(options)
                .then(res => reslove(res))
                .catch(err => {
                    let {
                        message
                    } = err || {}
                    if (message === 'Network Error') message = '网络错误'
                    else if (message.includes('timeout')) message = '请求超时，请刷新重试'
                    reslove({
                        code: ERROR_CODE,
                        msg: message
                    })
                })
        })
    }

    /**
     * get请求
     * @param {*} url 请求地址
     * @param {*} data 请求数据
     * @returns {Promise<any>}
     */
    get(url, data) {
        return this.request({
            url,
            data,
            method: 'GET'
        })
    }
    /**
     * post请求
     * @param {*} url 请求地址
     * @param {*} data 请求数据
     * @returns {Promise<any>}
     */
    post(url, data) {
        return this.request({
            url,
            data,
            method: 'POST'
        })
    }
    /**
     * get请求
     * @param {*} url 请求地址
     * @param {*} data 请求数据
     * @returns {Promise<any>}
     */
    put(url, data) {
        return this.request({
            url,
            data,
            method: 'PUT'
        })
    }
    /**
     * get请求
     * @param {*} url 请求地址
     * @param {*} data 请求数据
     * @returns {Promise<any>}
     */
    delete(url, data) {
        return this.request({
            url,
            data,
            method: 'DELETE'
        })
    }


}

export default HttpRequest