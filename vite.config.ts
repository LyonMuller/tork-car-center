import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

/** GitHub Pages project site: https://<user>.github.io/<repo>/ */
const defaultGithubPagesBase = '/tork-car-center/';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');
  const base = env.VITE_BASE || (mode === 'production' ? defaultGithubPagesBase : '/');
  const siteUrl = (env.VITE_SITE_URL || 'https://lyonmuller.github.io').replace(/\/$/, '');
  const ogImage = `${siteUrl}${base.replace(/\/$/, '')}/images/hero_workshop_1780023233615.png`;

  return {
    base,
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'html-seo',
        transformIndexHtml(html) {
          return html.replaceAll('__OG_IMAGE_URL__', ogImage);
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
