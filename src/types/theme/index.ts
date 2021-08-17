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

export enum Themes {
  'Default',
  'Cyber',
}

export const THEME_KEY: string = 'THEME_KEY'
