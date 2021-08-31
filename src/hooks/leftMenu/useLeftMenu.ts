import { LeftMenuStateType, THEME_KEY, Themes, MUTATION } from '@/types'
import storage from 'good-storage'
import { reactive } from 'vue'
import { useStore } from 'vuex'

export default function useLeftMenus() {
  const store = useStore()

  const leftMenuState: LeftMenuStateType = reactive({
    leftMenuAsideRef: null,
    showLoginSection: false,
    themeChecked: Boolean(storage.get(THEME_KEY)),
    showLeftMenu: true,
    Themes,
  })

  const openLoginSection = () => store.commit(MUTATION.SHOW_LOGIN_SECTION, true)

  return {
    leftMenuState,
    openLoginSection,
  }
}
