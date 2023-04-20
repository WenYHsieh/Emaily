import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 5174,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8888',
      },
      '/auth/google': {
        target: 'http://localhost:8888',
      },
    },
  },
  plugins: [react()],
})
