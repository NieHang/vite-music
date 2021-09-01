import { ACTION, MUTATION } from '@/types/store/index'
import { ActionTree, Module, MutationTree } from 'vuex'
import { UserState, RootState } from '@/types/store'
import { apis } from '@/http/backend'

const state = () => ({
  user: null,
  loginStatus: false,
})

const actions: ActionTree<UserState, RootState> = {
  [ACTION.USER_GET_LOGIN_STATUS]: async ({ commit }) => {
    return new Promise(async (resolve) => {
      const res = await apis.loginApis.getLoginStatus()
      if (res.data.data.profile !== null) {
        commit(MUTATION.USER_CHANGE_LOGIN_STATUS, true)
        commit(MUTATION.USER_GET_USER_ACCOUNT_INFO, res.data.data.profile)
        commit(MUTATION.GLOBAL_SHOW_LOGIN_SECTION, false)
      }
      resolve(Boolean(res.data.data.profile))
    })
  },
}

const mutations: MutationTree<UserState> = {
  [MUTATION.USER_GET_USER_ACCOUNT_INFO]: (state, result) => {
    state.user = result
  },
  [MUTATION.USER_CHANGE_LOGIN_STATUS]: (state, result) => {
    state.loginStatus = result
  },
}

export const user: Module<UserState, RootState> = {
  state,
  actions,
  mutations,
}
