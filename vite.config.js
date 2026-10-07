import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Si le site est publié dans un sous-dossier (ex. https://exemple.fr/portfolio/),
  // décommente la ligne suivante en remplaçant le chemin :
  // base: "/portfolio/",
});
