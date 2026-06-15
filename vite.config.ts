import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // GitHub repository name - update this to match your repo
  base: '/BHOSALE-PATIL-DEVELOPERS/',

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
    outDir: 'dist',
    sourcemap: false,
    minify: false,
  },
})