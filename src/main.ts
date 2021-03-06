import { createApp } from 'vue'
import router from '@/router'
import store from '@/store'
import App from './App.vue'

import { Lazyload } from '@vant/lazyload'

import 'normalize.css/normalize.css'
import '@/styles/index.styl'

import { Popup } from 'vant'
import svgIcon from '@/components/shared/SvgIcon.vue'

createApp(App)
  .use(Lazyload, {
    lazyComponent: true,
  })
  .use(router)
  .use(store)
  .directive('focus', (el: HTMLElement) => {
    el.focus()
  })
  .component('van-popup', Popup)
  .component('svg-icon', svgIcon)
  .mount('#app')
