import { AxiosPromise } from 'axios'

export interface ApiType {
  [apiModule: string]: any
}

export interface HandledLoginApiType {
  getCountryCode: () => AxiosPromise<any>
  getLoginStatus: () => AxiosPromise<any>
  loginOut: () => AxiosPromise<any>
  loginByPhone: (params: {
    phone: string
    password?: string
    countrycode?: string
    md5_password?: string
    captcha?: string
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
  registerOrChangePassword: (params: {
    captcha: string
    phone: string
    password: string
    nickname: string
    ctcode?: string
  }) => AxiosPromise<any>
}

export interface HandledUserApiType {
  getUserAccountInfo: () => AxiosPromise<any>
}

export interface HandledHomeApiType {
  getBanners: (params: { type: number }) => AxiosPromise<any>
}

export interface HandledApiType extends ApiType {
  loginApis: HandledLoginApiType
  userApis: HandledUserApiType
  homeApis: HandledHomeApiType
}
