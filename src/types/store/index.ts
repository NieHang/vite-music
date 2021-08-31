export interface GlobalState {
  showLoginSection: Boolean
  showLeftMenu: Boolean
  token: string
}

export interface UserState {
  user: any
}

export interface RootState {
  GlobalState: GlobalState
}

export const MUTATION = {
  SHOW_LOGIN_SECTION: 'SHOW_LOGIN_SECTION',
  SHOW_LEFT_MENU: 'SHOW_LEFT_MENU',
  LOGIN_TOKEN: 'LOGIN_TOKEN',
  GET_USER_ACCOUNT_INFO: 'GET_USER_ACCOUNT_INFO',
}

export const ACTION = MUTATION
