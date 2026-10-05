import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // overwrite default .html entry
  plugins: [react()],
  input: '/path/to/main.js',
  server: {
    cors: {
      // the origin you will be accessing via browser
      origin: 'http://my-backend.example.com',
    },
  },
  build: {
    // generate .vite/manifest.json in outDir
    manifest: true,
  },
})