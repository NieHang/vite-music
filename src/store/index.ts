import { createStore } from 'vuex'
import { global } from './modules/global'
import { user } from './modules/user'

const store = createStore({
  modules: {
    global,
    user,
  },
})

export default store
