# Synapse — Mapa Mental de Tarefas (versao empacotada)

App React + Vite, PWA instalavel, funciona offline. Sem Babel no navegador
e sem dependencias de CDN: React e as fontes sao empacotados localmente.

## 1) Antes de tudo: ajuste o nome do repositorio
Em `vite.config.js`, linha `const REPO = "synapse";` -> coloque o nome EXATO
do repositorio. Se o caminho nao bater, o Pages carrega tela em branco.

## 2) Icones (obrigatorio)
Coloque em `public/icons/`:
  icon-192.png (192x192)
  icon-512.png (512x512)
  apple-touch-icon.png (180x180)

## 3) Rodar localmente
    npm install
    npm run dev

## 4) Publicar
    git init
    git add .
    git commit -m "Synapse: versao empacotada com Vite + PWA"
    git branch -M main
    git remote add origin https://github.com/<usuario>/<repo>.git
    git push -u origin main

No GitHub: Settings > Pages > Source = "GitHub Actions".
O deploy roda sozinho a cada push na branch main.

## 5) Limpar a versao antiga (uma vez por dispositivo)
DevTools > Application > Service Workers > Unregister, depois
Storage > Clear site data, e Ctrl+Shift+R. Se instalou como app,
desinstale e reinstale. Depois disso as atualizacoes passam a ser
automaticas (autoUpdate + clientsClaim + skipWaiting).

## Observacoes tecnicas
- `structuredClone` ganhou fallback (`deepClone`) para iPads/Safari antigos.
- Os dados ficam em localStorage, na chave `synapse-mindmap-data`,
  por dispositivo/navegador. Nao ha sincronizacao entre pessoas.
- Apague o `sw.js` e o `manifest.json` antigos da raiz: agora sao gerados
  no build pelo vite-plugin-pwa.
