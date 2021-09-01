import { AxiosRequestConfig } from 'axios'
import base from './base'

const loginApis: {
  [api: string]: AxiosRequestConfig
} = {
  getCountryCode: {
    method: 'get',
    url: `${base.local}static/countries-code/countries-code.json`,
  },
  getLoginStatus: {
    method: 'get',
    url: `${base.api}login/status`,
  },
  loginByPhone: {
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
  checkPhoneRegister: {
    method: 'post',
    url: `${base.api}cellphone/existence/check`,
  },
  registerOrChangePassword: {
    method: 'post',
    url: `${base.api}register/cellphone`,
  },
}

export default loginApis
