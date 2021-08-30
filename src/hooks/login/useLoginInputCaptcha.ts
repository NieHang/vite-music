import { apis } from '@/http/backend'
import { Toast } from 'vant'
import { nextTick, reactive, watch } from 'vue'
export default function useLoginInputCaptcha() {
  const state = reactive({
    captcha: '',
    showKeyboard: false,
    restOfTimeForGetCaptcha: 5,
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
    if (val === '') nodes[0].classList.remove('input-active')
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

  const getCaptchaAgain = async (phone: string, ctcode: string) => {
    const captcha = await apis.loginApis.loginByCaptcha({
      phone,
      ctcode,
    })
    startCountTime()
    if (captcha.data.message) Toast.fail(captcha.data.message)
  }

  return { state, startCountTime, getCaptchaAgain, clearCountTime }
}
