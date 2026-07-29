# Synapse — deploy no GitHub Pages

## Passos

1. Crie um repositório novo no GitHub (ex: `synapse-app`).
2. Coloque todos os arquivos desta pasta (`index.html`, `manifest.json`, `sw.js`, `icons/`) na raiz do repositório e faça o push.
3. No repositório: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: main /(root)**.
4. Aguarde alguns minutos. O app ficará em `https://SEU-USUARIO.github.io/synapse-app/`.

## Instalar no celular/computador

- **Android (Chrome):** abra o link → menu (⋮) → "Instalar aplicativo" / "Adicionar à tela inicial".
- **iPhone (Safari):** abra o link → ícone de compartilhar → "Adicionar à Tela de Início".
- **Desktop (Chrome/Edge):** abra o link → ícone de instalação na barra de endereço → "Instalar".

## Observações

- Os dados ficam salvos no `localStorage` do navegador, **por dispositivo** — não sincronizam entre celular e computador (isso pode ser um próximo passo, com um backend).
- Se trocar o nome do repositório para algo diferente de `synapse-app`, os caminhos (`./`) continuam funcionando normalmente, pois são relativos.
- O service worker cacheia o app para funcionar offline depois da primeira visita. Se atualizar os arquivos futuramente, mude `CACHE_NAME` em `sw.js` (ex: `synapse-v2`) para forçar a atualização do cache nos dispositivos que já instalaram.
