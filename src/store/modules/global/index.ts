import { ACTION, MUTATION } from '@/types/store/index'
import { ActionTree, Module, MutationTree } from 'vuex'
import { GlobalState, RootState } from '@/types/store'

const state = (): GlobalState => ({
  showLoginSection: false,
  showLeftMenu: false,
  token: '',
})

const actions: ActionTree<GlobalState, RootState> = {
  [ACTION.SHOW_LEFT_MENU]: ({ commit }) => {
    commit(MUTATION.SHOW_LEFT_MENU, true)
  },
}

const mutations: MutationTree<GlobalState> = {
  [MUTATION.SHOW_LOGIN_SECTION]: (state, result) => {
    state.showLoginSection = result
  },
  [MUTATION.SHOW_LEFT_MENU]: (state, result) => {
    state.showLeftMenu = result
  },
  [MUTATION.LOGIN_TOKEN]: (state, result) => {
    state.token = result
  },
}

export const global: Module<GlobalState, RootState> = {
  state,
  actions,
  mutations,
}
