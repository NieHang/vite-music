import { AxiosRequestConfig } from 'axios'
import base from './base'

const userApis: {
  [api: string]: AxiosRequestConfig
} = {
  getUserAccountInfo: {
    method: 'get',
    url: `${base.api}user/account`,
  },
}

export default userApis
