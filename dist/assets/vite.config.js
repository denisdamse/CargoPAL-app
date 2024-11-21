import { defineConfig } from 'vite';

export default defineConfig({
  base: './',  // Ensure relative paths
  build: {
    outDir: 'dist',  // Specify where the build output goes
  },
  publicDir: 'CargoPAL-app',  // Specify the folder for static assets
});
