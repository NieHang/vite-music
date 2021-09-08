import { AxiosRequestConfig } from 'axios'
import base from './base'

const homeApis: {
  [api: string]: AxiosRequestConfig
} = {
  getBanners: {
    method: 'get',
    url: `${base.api}banner`,
  },
}

export default homeApis
