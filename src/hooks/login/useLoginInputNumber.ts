import { reactive } from 'vue'
import {
  LoginInputNumberStateType,
  PHONE_NUMBER_PERFIX,
} from '@/types/components'
import { apis } from '@/http/backend'
import storage from 'good-storage'

export default function useLoginInputNumber() {
  const state: LoginInputNumberStateType = reactive({
    phoneNumber: null,
    showIndexNumberPerfix: false,
    numberPerfix: '86',
    countryNumberPerfix: {},
    indexList: [],
  })
  const getCountryNumberPerfixAndIndexListData = async () => {
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
  const getCurrentNumberPerfix = (event: any) => {
    let parentNode: HTMLElement = event.target.parentNode
    while (
      parentNode != undefined &&
      !parentNode.className.includes('perfix-index-cell')
    ) {
      if (parentNode.className.includes('van-index-bar')) return
      parentNode = parentNode.parentNode as HTMLElement
    }
    state.numberPerfix = parentNode?.dataset.perfix!
    state.showIndexNumberPerfix = false
  }

  return {
    state,
    getCountryNumberPerfixAndIndexListData,
    getCurrentNumberPerfix,
  }
}
