import { Themes } from '@/types'
import { ComputedRef } from 'vue'

export const PHONE_NUMBER_PERFIX: string = 'PHONE_NUMBER_PERFIX'

export interface LeftMenuStateType {
  nickname: ComputedRef<string>
  avatarUrl: ComputedRef<string>
  loginStatus: ComputedRef<Boolean>
  leftMenuAsideRef: null | HTMLElement
  themeChecked: Boolean
  showLeftMenu: Boolean
  Themes: typeof Themes
}

export interface LoginSectionStateType {
  showLoginBtn: Boolean
  loginStatus: Boolean
  showLoginSection: ComputedRef<Boolean>
  showLoginByPhoneSection: Boolean
}
export interface LoginByPhoneStateType {
  phoneNumber: null | number
  showIndexCountryCodeList: Boolean
  showInputCtCodeSection: Boolean
  ctcode: string
  countryNumberPerfix: {
    [propName: string]: Array<Array<String>>
  }
  indexList: Array<String>
}
