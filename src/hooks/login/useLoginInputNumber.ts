import { reactive } from 'vue'
import { LoginInputNumberStateType } from '@/types/components'
import axios from 'axios'

export default function useLoginInputNumber() {
  const state: LoginInputNumberStateType = reactive({
    phoneNumber: null,
    showIndexNumberPerfix: false,
    numberPerfix: '86',
    countryNumberPerfix: {},
    indexList: [],
  })
  const getCountryNumberPerfixAndIndexListData = async () => {
    axios.get('../../static/phone-number/number.json').then((response) => {
      state.countryNumberPerfix = response.data
      for (const item in response.data) state.indexList.push(item)
    })
  }
  const getCurrentNumberPerfix = (event: any) => {
    let parentNode: HTMLElement = event.target.parentNode
    while (
      parentNode != undefined &&
      !parentNode?.className?.includes('perfix-index-cell')
    ) {
      parentNode = parentNode.parentNode as HTMLElement
    }
    state.numberPerfix = parentNode!.dataset.perfix!
    state.showIndexNumberPerfix = false
  }

  return {
    state,
    getCountryNumberPerfixAndIndexListData,
    getCurrentNumberPerfix,
  }
}
