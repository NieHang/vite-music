import { ComputedRef } from 'vue'

export const PHONE_NUMBER_PERFIX: string = 'PHONE_NUMBER_PERFIX'

export interface LeftMenuStateType {
  leftMenuAsideRef: null | HTMLElement
  showLoginSection: Boolean
  themeChecked: Boolean
  showLeftMenu: Boolean
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
