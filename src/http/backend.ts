import { HandledApiType } from '@/types/api'
import { AxiosPromise } from 'axios'
import { Api } from './api'
import service from './http'

const axiosApi = {
  // 对网络请求封装
  get(url: string): () => AxiosPromise<any> {
    return (params = {}) =>
      service({
        method: 'GET',
        url,
        ...params,
      })
  },

  post(url: string): (params?: any) => AxiosPromise<any> {
    return (params = {}) =>
      service({
        method: 'POST',
        url,
        params,
      })
  },

  creatApi(apiConfig: HandledApiType) {
    let methods: HandledApiType = apiConfig
    Object.keys(apiConfig).forEach((key) => {
      let item = apiConfig[key]

      if (!item.method && !item.url) {
        return (methods[key] = this.creatApi(item))
      }

      const method = item.method.toLocaleUpperCase()
      if (method === 'GET') {
        methods[key] = this.get(item.url)
      } else if (method === 'POST') {
        methods[key] = this.post(item.url)
      }
    })
    return methods
  },
}

export const apis = axiosApi.creatApi(Api as HandledApiType)
