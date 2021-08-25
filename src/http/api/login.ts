import base from './base'

const loginApis = {
  getCountryNumberPerfix: {
    method: 'get',
    url: `${base.local}static/phone-number/number.json`,
  },
}

export default loginApis
