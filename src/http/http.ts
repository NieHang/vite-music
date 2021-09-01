import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
// import storage from 'good-storage'

const service = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? `/` : window.location.origin,
  headers: {
    get: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    },
    post: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  },
  timeout: 30000,
  withCredentials: true,
  // 使用 async await ，处理 reject 非常麻烦，这里返回 true，在业务代码中处理异常
  validateStatus: () => true,
  transformRequest: [
    (data: any) => {
      data = JSON.stringify(data)
      return data
    },
  ],
  transformResponse: [
    (data: any) => {
      if (typeof data === 'string' && data.startsWith('{')) {
        data = JSON.parse(data)
      }
      return data
    },
  ],
})

// if (storage.get('token')) {
//   service.defaults.headers.common['Authorization'] = `Bearer ${storage.get(
//     'token'
//   )}`
// }

service.interceptors.request.use(
  (config: AxiosRequestConfig) => config,
  (error) => {
    error.data = {}
    error.data.msg = '服务器异常，请联系管理员！'
    return Promise.resolve(error)
  }
)

const showStatus = (status: number) => {
  let message = ''
  const obj: {
    [propName: number]: string
  } = {
    400: `请求错误(400)`,
    401: `未授权，请重新登录(401)`,
    403: `拒绝访问(403)`,
    404: `请求出错(404)`,
    408: `请求超时(408)`,
    500: `服务器错误(500)`,
    501: `服务未实现(501)`,
    502: `网络错误(502)`,
    503: `服务不可用(503)`,
    504: `网络超时(504)`,
    505: `HTTP版本不受支持(505)`,
  }
  message = obj[status] || `连接出错(${status})!`
  return `${message}，请检查网络或联系管理员！`
}

service.interceptors.response.use(
  (response: AxiosResponse) => {
    const status = response.status
    let msg = ''
    if (status < 200 || status >= 300) {
      msg = showStatus(status)
      if (typeof response.data === 'string') response.data = { msg }
      else response.data.msg = msg
    }
    return response
  },
  (error) => {
    error.data = {}
    error.msg = '请求超时或服务器异常，请检查网络或联系管理员！'
    return Promise.resolve(error)
  }
)

export default service
