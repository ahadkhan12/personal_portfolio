import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// vite.config.js

export default defineConfig({
  plugins: [react()],
  // base: '/portfolio/',  // Base path set to your repo name
});
