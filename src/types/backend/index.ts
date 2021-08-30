import { AxiosPromise } from 'axios'

export interface ApiType {
  [apiModule: string]: any
}

export interface HandledLoginApiType {
  getCountryNumberPerfix: () => AxiosPromise<any>
  loginByPhoneNumber: (params: {
    phone: string
    password: string
    countrycode?: string
    md5_password?: string
  }) => AxiosPromise<any>
  loginByCaptcha: (params: {
    phone: string
    ctcode?: string
  }) => AxiosPromise<any>
  verifyCaptcha: (param: {
    phone: string
    captcha: string
    ctcode?: string
  }) => AxiosPromise<any>
  checkPhoneRegister: (params: {
    phone: string
    ctcode?: string
  }) => AxiosPromise<any>
}

export interface HandledApiType extends ApiType {
  loginApis: HandledLoginApiType
}
