import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'


// https://vitejs.dev/config/
export default defineConfig({
  
  const AGENDA_URL = {...process.env, ...loadEnv(mode, process.cwd(),'')}, //adicionado
  
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },  
  server: {
    proxy: {
      '/api': {
        target: AGENDA_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/,'')
      },
    },
  },
})
