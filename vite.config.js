import { defineConfig } from 'vite';

export default defineConfig({
  base: './',  // Ensure relative paths for assets
  build: {
    outDir: 'dist',  // Output directory for the build
    rollupOptions: {
      input: 'index.html',
      jsfile1: '.pnp.cjs',
      jsfile2: '.pnp.loader.mjs',
      accesLocatie: 'accesLocatie.html',
      adminLogin: 'adminLogin.html',
      contConfirmat: 'contConfirmat.html',
      jsfile3: 'counter.js',
      creareContCompanie: 'creareContCompanie.html',
      creareContCompanie2: 'creareContCompanie2.html',
      creareMasina: 'creareMasina.html',
      cursaFinalizata: 'cursaFinalizata.html',
      descare: 'descarcare.html',
      driver: 'driverSignIn.html',
      incarcare:'Incarcare.html',
      main: 'main.js',
      meniuPrincipal: 'meniuPrincipalCompanie.html',
      pac: 'package.json',
      paginaAdmin: 'paginaAdmin.html',
      config: 'postcss.config.js',
      style: 'style.css',
      styleconfig: 'tailwind.config.js',
      viteconfig: 'vite.config.js',
      yarnfile: 'yarn.lock'
    },
  },
  publicDir: 'CargoPAL-app',  // Static assets will be taken from here
});
