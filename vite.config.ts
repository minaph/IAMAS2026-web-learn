// vite.config.js または vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue(),
    // 他のプラグインがあるなら続けて書く
  ],
  // 必要なら他の設定も
})
