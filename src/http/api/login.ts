import { AxiosRequestConfig } from 'axios'
import base from './base'

const loginApis: {
  [api: string]: AxiosRequestConfig
} = {
  getCountryNumberPerfix: {
    method: 'get',
    url: `${base.local}static/phone-number/number.json`,
  },
  loginByPhoneNumber: {
    method: 'post',
    url: `${base.api}login/cellphone`,
  },
  loginByCtCode: {
    method: 'post',
    url: `${base.api}captcha/sent`,
  },
}

export default loginApis
