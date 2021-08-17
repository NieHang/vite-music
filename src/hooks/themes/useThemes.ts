import { ThemeMap, Varibles, Themes, THEME_KEY } from '@/types'
import variblesDefault from '@/styles/themes/variblesDefault'
import variblesCyber from '@/styles/themes/variblesCyber'
import storage from 'good-storage'

export default function useTheme() {
  const themeMap: ThemeMap = {
    [Themes.Default]: {
      title: '深色',
      file: variblesDefault,
      style: {
        background: '#262626',
      },
    },
    [Themes.Cyber]: {
      title: 'Cyber',
      file: variblesCyber,
      style: {
        background: '#030302',
      },
    },
  }

  const changeTheme = (themeKey: number): void => {
    storage.set(THEME_KEY, themeKey)
    const theme: Varibles = themeMap[themeKey].file
    Object.keys(theme).forEach((key) => {
      const value: string = theme[key]
      document.documentElement.style.setProperty(key, value)
    })
  }

  // 默认深色
  changeTheme(storage.get(THEME_KEY, Themes.Default))

  return changeTheme
}
