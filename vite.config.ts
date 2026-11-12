import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => ({
  // This is a project site (not a user/organization root site).
  // Vite must prefix built asset URLs with the repository path on GitHub Pages.
  base: '/Autoservice-Hazenberg-v1/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), '.'),
    },
  },
  server: {
    // HMR is disabled in AI Studio via DISABLE_HMR env VAR.
    hmr: process.env.DISABLE_HMR !== 'true',
    watch: process.env.DISABLE_HMR === 'true' ? null : {},
  },
}));
