// vite.config.js
import {
  resolve
} from 'path'
import {
  defineConfig
} from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        profile: resolve(__dirname, 'pages/profile/index.html'),
      },
    },
  },
})