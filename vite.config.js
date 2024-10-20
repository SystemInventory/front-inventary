import path from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      '@': path.resolve(__dirname, 'src/')
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // Cambia esto a la URL de tu backend
        changeOrigin: true,
        secure: false,
      },
    },
  },
})