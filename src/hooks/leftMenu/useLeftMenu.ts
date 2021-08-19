import { LeftMenuStateType, THEME_KEY, Themes } from '@/types'
import storage from 'good-storage'
import { reactive } from 'vue'

export default function useLeftMenus() {
  const leftMenuState: LeftMenuStateType = reactive({
    leftMenuAsideRef: null,
    showLoginSection: false,
    themeChecked: Boolean(storage.get(THEME_KEY)),
    showLeftMenu: true,
    Themes,
  })

  const openLoginSection = () => (leftMenuState.showLoginSection = true)

  return {
    leftMenuState,
    openLoginSection,
  }
}
