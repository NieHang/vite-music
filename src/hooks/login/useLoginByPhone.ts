import { reactive } from 'vue'
import {
  LoginInputNumberStateType,
  PHONE_NUMBER_PERFIX,
} from '@/types/components'
import { apis } from '@/http/backend'
import storage from 'good-storage'
import { Toast } from 'vant'

export default function useLoginInputNumber() {
  const state: LoginInputNumberStateType = reactive({
    phoneNumber: null,
    showIndexCountryCodeList: false,
    ctcode: '86',
    countryNumberPerfix: {},
    indexList: [],
    showInputCtCodeSection: false,
  })

  const getCountryCodeAndIndexListData = async () => {
    const data = storage.get(PHONE_NUMBER_PERFIX)
    if (!data) {
      await apis.loginApis.getCountryNumberPerfix().then((response) => {
        storage.set(PHONE_NUMBER_PERFIX, response.data)
      })
    }

    state.countryNumberPerfix = storage.get(PHONE_NUMBER_PERFIX)
    for (const item in storage.get(PHONE_NUMBER_PERFIX))
      state.indexList.push(item)
  }

  const getCurrentCountryCode = (event: any) => {
    let parentNode: HTMLElement = event.target.parentNode
    while (
      parentNode != undefined &&
      !parentNode.className.includes('perfix-index-cell')
    ) {
      if (parentNode.className.includes('van-index-bar')) return
      parentNode = parentNode.parentNode as HTMLElement
    }
    state.ctcode = parentNode?.dataset.perfix!
    state.showIndexCountryCodeList = false
  }

  const nextStep = () => {
    if (state.ctcode === '86' && String(state.phoneNumber).length !== 11) {
      Toast.fail('请输入 11位 手机号')
      return
    }
    state.showInputCtCodeSection = true
    apis.loginApis
      .loginByCaptcha({
        phone: String(state.phoneNumber),
        ctcode: state.ctcode,
      })
      .then((resolve) => {
        if (resolve.data.message) Toast.fail(resolve.data.message)
      })
  }

  return {
    state,
    getCountryCodeAndIndexListData,
    getCurrentCountryCode,
    nextStep,
  }
}
