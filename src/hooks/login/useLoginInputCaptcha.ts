import { apis } from '@/http/backend'
import { Toast } from 'vant'
import { nextTick, reactive, watch } from 'vue'
export default function useLoginInputCaptcha() {
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
    const res = await apis.loginApis.verifyCaptcha({
      phone,
      captcha: state.captcha,
      ctcode,
    })
    if (res.data.data) {
      apis.loginApis.checkPhoneRegister({ phone })
    } else if (res.data.message) Toast.fail(res.data.message)
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
