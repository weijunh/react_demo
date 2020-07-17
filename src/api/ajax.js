import axios from 'axios'
import { message } from 'antd'
import qs from 'qs'

// axios 配置
axios.defaults.timeout = 8000
axios.defaults.headers = { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }

// 设置基本的地址路径
axios.defaults.baseURL = `http://192.168.1.149:7878`
// 请求拦截器
axios.interceptors.request.use(
  (config) => {

    // 获取config对象中的data参数
    let data = config.data
    if (data && data instanceof Object) {
      config.data = qs.stringify(data)
    }

    // config.headers.authorization ='Bearer '+ token
    return config
  },
  (error) => {
    return Promise.reject(error);
  }

)

// 响应拦截器
axios.interceptors.response.use(
  (res) => {
    if (!res.data.success) {
      return Promise.resolve(res)
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default axios