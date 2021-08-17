import { LeftMenuStateType, THEME_KEY, Themes, MUTATION } from '@/types'
import storage from 'good-storage'
import { computed, reactive } from 'vue'
import { Store } from 'vuex'

export default function useLeftMenus(store: Store<any>) {
  const leftMenuState: LeftMenuStateType = reactive({
    leftMenuAsideRef: null,
    // showLoginSection: false,
    themeChecked: Boolean(storage.get(THEME_KEY)),
    showLeftMenu: computed(() => store.state.showLeftMenu),
    Themes,
  })

  const hideLeftMenu = (e: MouseEvent) => {
    if (!(leftMenuState.leftMenuAsideRef as any).contains(e.target))
      store.commit(MUTATION.SHOW_LEFT_MENU, false)
  }

  return {
    leftMenuState,
    hideLeftMenu,
  }
}
