import { LoginSectionStateType } from '@/types/components'
import { ACTION, MUTATION } from '@/types/store'
import { computed, defineAsyncComponent, reactive } from 'vue'
import { useStore } from 'vuex'

export default function useLoginSection() {
  const store = useStore()

  const state: LoginSectionStateType = reactive({
    showLoginBtn: true,
    loginStatus: computed({
      get: () => store.state.user.loginStatus,
      set: () => {},
    }),
    showLoginSection: computed({
      get: () => store.state.global.showLoginSection,
      set: () => {},
    }),
    showLoginByPhoneSection: false,
  })

  const toHideLoginSection = () =>
    store.commit(MUTATION.GLOBAL_SHOW_LOGIN_SECTION, false)

  const LoginByPhoneComponent = defineAsyncComponent(
    () => import('@/components/login/LoginByPhone.vue')
  )

  const getLoginStatus = async () => {
    store.dispatch(ACTION.USER_GET_LOGIN_STATUS).then((res) => {
      state.showLoginBtn = res
    })
  }

  getLoginStatus()

  return {
    state,
    toHideLoginSection,
    LoginByPhoneComponent,
  }
}
