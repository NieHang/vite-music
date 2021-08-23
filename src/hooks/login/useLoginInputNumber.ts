import { reactive } from 'vue'
import axios from 'axios'

export default function useLoginInputNumber() {
  const state = reactive({
    phoneNumber: null,
    showIndexNumberPerfix: false,
    numberPerfix: '86',
  })
  const getCountryNumberPerfixAndIndexListData = async () => {
    const indexList: Array<String> = []
    let countryNumberPerfix: {
      [propName: string]: Array<Array<String>>
    } = {}
    await axios
      .get('../../static/phone-number/number.json')
      .then((response) => {
        countryNumberPerfix = response.data
        for (const item in response.data) indexList.push(item)
      })
    return {
      indexList,
      countryNumberPerfix,
    }
  }
  const getCurrentNumberPerfix = (numberPerfix: string) => {
    state.numberPerfix = numberPerfix
    state.showIndexNumberPerfix = false
  }

  return {
    state,
    getCountryNumberPerfixAndIndexListData,
    getCurrentNumberPerfix,
  }
}
