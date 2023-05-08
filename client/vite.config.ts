import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dotenv from 'dotenv'

dotenv.config()
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
  define: Object.keys(process.env).reduce((env, key) => {
    env[`import.meta.env.${key}`] = JSON.stringify(process.env[key])
    return env
  }, {}),

  plugins: [react()],
})
