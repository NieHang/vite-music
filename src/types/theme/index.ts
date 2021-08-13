import { Varibles } from '@/types/index'

export interface ThemeType {
  title: String
  file: Varibles
  style: {
    [propName: string]: string
  }
}

export interface ThemeMap {
  [propName: string]: ThemeType
}
