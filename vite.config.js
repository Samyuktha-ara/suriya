import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Served from https://<user>.github.io/suriya/ on GitHub Pages.
  base: '/suriya/',
  plugins: [react()],
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    reportCompressedSize: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion') || id.includes('motion-dom') || id.includes('motion-utils'))
              return 'motion'
            if (id.includes('lucide-react')) return 'icons'
            if (id.includes('react')) return 'react-vendor'
          }
        },
      },
    },
  },
})
