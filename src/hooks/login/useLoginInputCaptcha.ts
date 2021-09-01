import storage from 'good-storage'
import { apis } from '@/http/backend'
import { MUTATION } from '@/types'
import { Toast } from 'vant'
import { nextTick, reactive, watch } from 'vue'
import { useStore } from 'vuex'
import service from '@/http/http'

export default function useLoginInputCaptcha() {
  const store = useStore()

  const state = reactive({
    captcha: '',
    showKeyboard: true,
    restOfTimeForGetCaptcha: 10,
    interval: null,
  })

  watch(
    [() => state.captcha, () => state.restOfTimeForGetCaptcha],
    async ([captchaVal, timeVal]) => {
      watchCaptcha(captchaVal)
      watchTime(timeVal)
    }
  )

  const watchCaptcha = async (val: string) => {
    await nextTick()

    const nodes: HTMLCollectionOf<Element> = document.getElementsByClassName(
      'van-password-input__item'
    )
    nodes[val.length - 1 < 0 ? 0 : val.length - 1].classList.add('input-active')
    if (val === '') {
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].classList.remove('input-active')
      }
    }
  }

  const watchTime = (val: number) => val === 0 && clearInterval(state.interval!)

  const startCountTime = () => {
    state.restOfTimeForGetCaptcha = 5
    ;(state.interval as unknown) = setInterval(() => {
      state.restOfTimeForGetCaptcha--
    }, 1000)
  }

  const clearCountTime = () => {
    if (state.interval) clearInterval(state.interval!)
  }

  const getCaptchaAgain = async (phone: string, ctcode?: string) => {
    const res = await apis.loginApis.loginByCaptcha({
      phone,
      ctcode,
    })
    startCountTime()
    if (res.data.message) Toast.fail(res.data.message)
  }

  const verifyCaptcha = async (phone: string, ctcode?: string) => {
    await nextTick()
    if (state.captcha.length !== 4) return
    Toast.loading({ message: '加载中...', forbidClick: true, duration: 0 })
    const res = await apis.loginApis.verifyCaptcha({
      phone,
      captcha: state.captcha,
      ctcode,
    })
    if (res.data.data) {
      await registerOrChangePassword(phone, ctcode)
      Toast.clear()
    } else if (res.data.message) Toast.fail(res.data.message)
  }

  const registerOrChangePassword = async (phone: string, ctcode?: string) => {
    // 验证手机号是否被注册
    const res = await apis.loginApis.checkPhoneRegister({ phone, ctcode })
    if (res.data.exist) {
      // 如果已经注册，就调用登录接口，存储用户信息以及token
      login(phone, ctcode)
    } else if (res.data.exist === -1) {
      // 如果没有注册，就调用注册接口
      register(phone, ctcode)
    } else {
      Toast.fail(res.data.message)
    }
  }

  const login = async (phone: string, ctcode?: string) => {
    const loginRes = await apis.loginApis.loginByPhone({
      phone,
      captcha: state.captcha,
      countrycode: ctcode,
    })
    if (loginRes.data.code === 200) {
      store.commit(MUTATION.GLOBAL_LOGIN_TOKEN, loginRes.data.token)
      store.commit(MUTATION.USER_CHANGE_LOGIN_STATUS, true)
      store.commit(MUTATION.USER_GET_USER_ACCOUNT_INFO, loginRes.data.profile)
      service.defaults.headers.common['Authorization'] =
        `Bearer ` + loginRes.data.token
      storage.set('token', loginRes.data.token)
      // 关闭 loginSection
      store.commit(MUTATION.GLOBAL_SHOW_LOGIN_SECTION, false)
    } else {
      Toast.fail(loginRes.data.message)
      return
    }
  }

  const register = async (phone: string, ctcode?: string) => {
    const res = await apis.loginApis.registerOrChangePassword({
      phone,
      ctcode,
      password: phone,
      captcha: state.captcha,
      nickname: phone,
    })
    if (res.data.message) {
      Toast.fail(res.data.message)
    } else {
      // 关闭 loginSection
      store.commit(MUTATION.GLOBAL_SHOW_LOGIN_SECTION, false)
    }
  }

  const openPopup = () => {
    state.showKeyboard = true
    startCountTime()
  }

  const closePopup = () => {
    state.captcha = ''
    clearCountTime()
  }

  return { state, openPopup, getCaptchaAgain, closePopup, verifyCaptcha }
}
