import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import styleImport from 'vite-plugin-style-import'
import { importStylus } from './vite-stylus-import-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    {
      ...importStylus(),
      enforce: 'pre',
    },
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style`,
        },
      ],
    }),
  ],
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
  },
})
