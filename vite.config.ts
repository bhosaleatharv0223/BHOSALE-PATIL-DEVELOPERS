import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Base path - use root for Vercel deployment
  base: '/',

  plugins: [
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      '@': '/src',
    },
  },

  assetsInclude: ['**/*.svg', '**/*.csv'],

  build: {
    outDir: 'docs',
    sourcemap: false,
    minify: false,
  },
})