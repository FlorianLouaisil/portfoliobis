import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // 🔥 Important pour éviter les erreurs de chemin sur Vercel
  build: {
    outDir: 'dist', 
    assetsDir: 'assets'
  }
});
