# Tork Car Center

Landing page da **Tork Car Center** — oficina em Joinville (Petrópolis) com mecânica, ar-condicionado, elétrica e estética automotiva.

## Stack

- React 19 + Vite 6
- Tailwind CSS v4

## Desenvolvimento

```bash
npm install
npm run dev
```

O site sobe em [http://localhost:3000](http://localhost:3000).

## Build de produção

```bash
npm run build
npm run preview
```

Os arquivos estáticos ficam em `dist/`. Imagens e favicon estão em `public/`.

## Variáveis de ambiente

Copie `.env.example` para `.env` se precisar customizar `VITE_SITE_URL` ou `VITE_BASE`.

## Publicar no GitHub Pages

O repositório inclui o workflow [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml). A cada push na branch `main`, o site é publicado em:

**https://lyonmuller.github.io/tork-car-center/**

### Primeira vez (no GitHub)

1. Envie o código para `main` (commit + push).
2. No repositório: **Settings → Pages**.
3. Em **Build and deployment**, escolha **Source: GitHub Actions** (não “Deploy from a branch”).
4. Aguarde o workflow **Deploy to GitHub Pages** terminar em **Actions** (1–3 minutos).

### Testar o build local (como no Pages)

```bash
VITE_BASE=/tork-car-center/ VITE_SITE_URL=https://lyonmuller.github.io npm run build
npm run preview
```

Abra a URL que o `preview` indicar (assets usam o subcaminho `/tork-car-center/`).

### Domínio customizado

Se usar domínio próprio, atualize `VITE_SITE_URL` no workflow e nas variáveis de ambiente, e configure o domínio em **Settings → Pages**.
