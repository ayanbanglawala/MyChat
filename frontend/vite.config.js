import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/MyChat/',
  plugins: [react()],
  server:{
    port: 5000,
    proxy: {
      '/api': {
        target: 'https://mychat-ycy8.onrender.com', // Update this line
        changeOrigin: true,
      },
    },    
  }
})
