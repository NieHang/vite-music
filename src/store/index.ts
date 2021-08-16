import { createStore } from 'vuex'
import { MUTATION } from '@/types'

const store = createStore({
  state() {
    return {
      showLeftMenu: false,
    }
  },
  mutations: {
    [MUTATION.SHOW_LEFT_MENU](state: any, showLeftMenu) {
      state.showLeftMenu = showLeftMenu
    },
  },
})

export default store
