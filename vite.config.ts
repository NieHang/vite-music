import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import styleImport from 'vite-plugin-style-import'
import { importStylus } from './vite-stylus-import-plugin'
import { svgBuilder } from './src/pulgins/svgBuilder'

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
    svgBuilder('./src/assets/icons/svg/'),
  ],
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
  },
  server: {
    fs: {
      strict: true,
      allow: ['..'],
    },
  },
})
