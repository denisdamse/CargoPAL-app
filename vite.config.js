import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        loginSofer: 'driverSignIn.html',
        incarcare: 'Incarcare.html',
        descarcare: 'descarcare.html',
        adminLogin: 'adminLogin.html',
        contConfirmat: 'contConfirmat.html',
        creareContCompaniePart1: 'creareContCompanie.html',
        creareContCompaniePart2: 'creareContCompanie2.html',
        creareMasina: 'creareMasina.html',
        cursaFinalizata: 'cursaFinalizata.html',
        driverSignIn: 'driverSignIn.html',
        meniuPrincipalCompanie: 'meniuPrincipalCompanie.html',
        admin: 'paginaAdmin.html'
      }
    }
  }
});
