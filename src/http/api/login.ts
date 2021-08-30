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
  loginByCaptcha: {
    method: 'post',
    url: `${base.api}captcha/sent`,
  },
  verifyCaptcha: {
    method: 'post',
    url: `${base.api}captcha/verify`,
  },
}

export default loginApis
