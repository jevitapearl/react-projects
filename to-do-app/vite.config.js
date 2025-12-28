import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/react-projects/to-do-app/',
  server: {
    watch: {
      usePolling: true,
    },
  },
})
