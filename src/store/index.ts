import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      showLeftMenu: false,
    }
  },
  mutations: {
    ['SHOW_LEFT_MENU'](state: any, showLeftMenu) {
      state.showLeftMenu = showLeftMenu
    },
  },
})

export default store
