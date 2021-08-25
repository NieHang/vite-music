import { AxiosPromise } from 'axios'

export interface ApiType {
  [apiModule: string]: any
}

export interface HandledLoginApiType {
  getCountryNumberPerfix: () => AxiosPromise<any>
}

export interface HandledApiType extends ApiType {
  loginApis: HandledLoginApiType
}
