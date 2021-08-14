import { createApp } from 'vue'
import router from '@/router'
import App from './App.vue'

import { Lazyload } from '@vant/lazyload'

import 'normalize.css/normalize.css'
import '@/styles/index.styl'

createApp(App)
  .use(Lazyload, {
    lazyComponent: true,
  })
  .use(router)
  .mount('#app')
