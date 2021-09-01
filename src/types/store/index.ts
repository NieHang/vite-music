export interface GlobalState {
  showLoginSection: Boolean
  showLeftMenu: Boolean
  token: string
}

export interface UserState {
  user: {
    userId: number
    birthday: number
    defaultAvatar: boolean
    province: number
    gender: number
    avatarUrl: string
    nickname: string
    city: number
    backgroundUrl: string
    detailDescription: string
    accountStatus: number
    authority: number
    followeds: number
    follows: number
    eventCount: number
    playlistCount: number
    playlistBeSubscribedCount: number
  } | null
  loginStatus: Boolean
}

export interface RootState {
  GlobalState: GlobalState
  UserState: UserState
}

export const MUTATION = {
  GLOBAL_SHOW_LOGIN_SECTION: 'GLOBAL_SHOW_LOGIN_SECTION',
  GLOBAL_SHOW_LEFT_MENU: 'GLOBAL_SHOW_LEFT_MENU',
  GLOBAL_LOGIN_TOKEN: 'GLOBAL_LOGIN_TOKEN',
  GLOBAL_LOGIN_OUT: 'GLOBAL_LOGIN_OUT',
  USER_GET_LOGIN_STATUS: 'USER_GET_LOGIN_STATUS',
  USER_CHANGE_LOGIN_STATUS: 'USER_CHANGE_LOGIN_STATUS',
  USER_GET_USER_ACCOUNT_INFO: 'USER_GET_USER_ACCOUNT_INFO',
}

export const ACTION = MUTATION
