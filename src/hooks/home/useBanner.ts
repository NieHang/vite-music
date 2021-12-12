import { apis } from '@/http/backend'
import { ref } from '@vue/runtime-dom'

export default function useBanner(
  bannerType: 'Pc' | 'Android' | 'Iphone' | 'Ipad'
) {
  let banners = ref()

  enum BannerType {
    Pc = 0,
    Android,
    Iphone,
    Ipad,
  }

  const getBanners = async (type: number) => {
    const res = await apis.homeApis.getBanners({ type })
    banners.value = res.data.banners
  }

  getBanners(BannerType[bannerType])

  return banners
}
