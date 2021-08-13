import { ThemeMap, Varibles } from '@/types/index'
import variblesDefault from '@/styles/themes/variblesDefault'
import variblesCyber from '@/styles/themes/variblesCyber'
import storage from 'good-storage'

export default function useTheme() {
  enum themes {
    'Default',
    'Cyber',
  }

  const THEME_KEY: string = 'THEME_KEY'

  const themeMap: ThemeMap = {
    [themes.Default]: {
      title: '深色',
      file: variblesDefault,
      style: {
        background: '#262626',
      },
    },
    [themes.Cyber]: {
      title: 'Cyber',
      file: variblesCyber,
      style: {
        background: '#030302',
      },
    },
  }

  const changeTheme = (themeKey: string): void => {
    storage.set(THEME_KEY, themeKey)
    const theme: Varibles = themeMap[themeKey].file
    Object.keys(theme).forEach((key) => {
      const value: string = theme[key]
      document.documentElement.style.setProperty(key, value)
    })
  }

  // 默认深色
  changeTheme(storage.get(THEME_KEY, themes.Default))

  return changeTheme
}
