import { LeftMenuStateType, THEME_KEY, Themes, MUTATION, ACTION } from '@/types'
import storage from 'good-storage'
import { Dialog } from 'vant'
import { computed, reactive } from 'vue'
import { useStore } from 'vuex'

export default function useLeftMenus() {
  const store = useStore()

  const leftMenuState: LeftMenuStateType = reactive({
    nickname: computed(() => store.state.user?.user?.nickname),
    avatarUrl: computed(() => store.state.user?.user?.avatarUrl),
    loginStatus: computed(() => store.state.user.loginStatus),
    leftMenuAsideRef: null,
    themeChecked: Boolean(storage.get(THEME_KEY)),
    showLeftMenu: false,
    Themes,
  })

  const openLoginSection = () =>
    store.commit(MUTATION.GLOBAL_SHOW_LOGIN_SECTION, true)

  const loginOut = () => {
    Dialog.confirm({
      title: '网易云音乐',
      message: '确定退出当前帐号吗？',
    })
      .then(() => {
        store.dispatch(ACTION.GLOBAL_LOGIN_OUT)
      })
      .catch(() => {})
  }

  return {
    leftMenuState,
    openLoginSection,
    loginOut,
  }
}
