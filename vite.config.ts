import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import * as dotenv from 'dotenv'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    define: {
      __APP_ENV__: env.__APP_ENV__
    }
  }
})
