import { apis } from '@/http/backend'
import { reactive } from '@vue/runtime-dom'

export default function useHome() {
  const homeState = reactive({
    banners: null,
  })

  const getBanners = async (type: number) => {
    const res = await apis.homeApis.getBanners({ type })
    homeState.banners = res.data.banners
  }

  getBanners(2)

  return {
    homeState,
  }
}
