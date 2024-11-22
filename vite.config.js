import { defineConfig } from "vite";
export default defineConfig({
  base: "",
  build: {
    rollupOptions: {
      input: ["index.html", 
        "./acceslocatie.html",
        "adminLogin.html",
        "asteptareConfirmareContCompanie.html",
        "contConfirmat.html",
        "creareContCompanie.html",
        "creareContCompanie2.html",
        "creareMasina.html",
        "cursaFinalizata.html",
        "descarcare.html",
        "driverSignIn.html",
        "Incarcare.html",
        "meniuPrincipalCompanie.html",
        "paginaAdmin.html",
      ],
    },
  },
});