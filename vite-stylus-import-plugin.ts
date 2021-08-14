import type { Plugin } from 'vite'
import path from 'path'

export function importStylus(): Plugin {
  return {
    name: 'vite-stylus-import-plugin',
    async transform(code, id) {
      if (/.stylus$/g.test(id)) {
        return {
          code: `
            @import "${path.resolve(__dirname, './src/styles/index')}"

            ${code}
          `,
          map: null,
        }
      }
      return null
    },
  }
}
