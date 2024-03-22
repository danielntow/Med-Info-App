import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react'
import react from '@vitejs/plugin-react-swc';

import jsconfigPaths from 'vite-jsconfig-paths';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), jsconfigPaths()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'node_modules'),
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    chunkSizeWarningLimit: 16000
  }
});
