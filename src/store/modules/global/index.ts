import { ACTION, MUTATION } from '@/types/store/index'
import { ActionTree, Module, MutationTree } from 'vuex'
import { GlobalState, RootState } from '@/types/store'
import storage from 'good-storage'
import { apis } from '@/http/backend'

const state = (): GlobalState => ({
  showLoginSection: true,
  showLeftMenu: false,
  showLoginBtn: false,
  token: '',
})

const actions: ActionTree<GlobalState, RootState> = {
  [ACTION.GLOBAL_SHOW_LEFT_MENU]: ({ commit }, result) => {
    commit(MUTATION.GLOBAL_SHOW_LEFT_MENU, result)
  },
  [ACTION.GLOBAL_LOGIN_OUT]: async ({ commit }) => {
    await apis.loginApis.loginOut()
    commit(MUTATION.USER_CHANGE_LOGIN_STATUS, false)
    commit(MUTATION.USER_GET_USER_ACCOUNT_INFO, null)
    storage.remove('token')
    commit(MUTATION.GLOBAL_SHOW_LOGIN_SECTION, true)
    commit(MUTATION.GLOBAL_SHOW_LOGIN_BTN, true)
  },
}

const mutations: MutationTree<GlobalState> = {
  [MUTATION.GLOBAL_SHOW_LOGIN_SECTION]: (state, result) => {
    state.showLoginSection = result
  },
  [MUTATION.GLOBAL_SHOW_LEFT_MENU]: (state, result) => {
    state.showLeftMenu = result
  },
  [MUTATION.GLOBAL_SHOW_LOGIN_BTN]: (state, result) => {
    state.showLoginBtn = result
  },
  [MUTATION.GLOBAL_LOGIN_TOKEN]: (state, result) => {
    state.token = result
  },
}

export const global: Module<GlobalState, RootState> = {
  state,
  actions,
  mutations,
}
