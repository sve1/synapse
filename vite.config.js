import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// ATENCAO: troque "synapse" pelo nome EXATO do repositorio no GitHub.
const REPO = "https://github.com/sve1/synapse";

export default defineConfig({
  base: `/${REPO}/`,
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: null,
      includeAssets: ["icons/*.png"],
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,svg,woff,woff2}"],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        skipWaiting: true,
        navigateFallback: `/${REPO}/index.html`
      },
      manifest: {
        name: "Synapse — Mapa Mental de Tarefas",
        short_name: "Synapse",
        description: "Mapa mental para organizar tarefas, pendencias e processos.",
        lang: "pt-BR",
        start_url: `/${REPO}/`,
        scope: `/${REPO}/`,
        display: "standalone",
        orientation: "any",
        background_color: "#1a1c22",
        theme_color: "#1a1c22",
        icons: [
          { src: "icons/icon-192.png", sizes: "192x192", type: "image/png" },
          { src: "icons/icon-512.png", sizes: "512x512", type: "image/png" },
          { src: "icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" }
        ]
      }
    })
  ]
});
