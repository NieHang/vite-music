import { AxiosPromise, AxiosResponse } from 'axios'

export interface ApiType {
  [apiModule: string]: any
}

export interface HandledLoginApiType {
  getCountryNumberPerfix: () => AxiosPromise<AxiosResponse>
  loginByPhoneNumber: (params: {
    phone: string
    password: string
    countrycode?: string
    md5_password?: string
  }) => AxiosPromise<AxiosResponse>
  loginByCtCode: (params: {
    phone: string
    ctcode?: string
  }) => AxiosPromise<AxiosResponse>
}

export interface HandledApiType extends ApiType {
  loginApis: HandledLoginApiType
}
