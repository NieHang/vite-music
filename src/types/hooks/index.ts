export interface Home__State {
  banners: Array<Home__Banners> | null
}

export interface Home__Banners {
  imageUrl: string
  typeTitle: string
  titleColor: string
  targetId: number
  targetType: number
  url: string
}
