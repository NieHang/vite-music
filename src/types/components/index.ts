export const PHONE_NUMBER_PERFIX: string = 'PHONE_NUMBER_PERFIX'

export interface LeftMenuStateType {
  leftMenuAsideRef: null | HTMLElement
  showLoginSection: Boolean
  themeChecked: Boolean
  showLeftMenu: Boolean
}
export interface LoginInputNumberStateType {
  phoneNumber: null
  showIndexNumberPerfix: Boolean
  numberPerfix: String
  countryNumberPerfix: {
    [propName: string]: Array<Array<String>>
  }
  indexList: Array<String>
}
