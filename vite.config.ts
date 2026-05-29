import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');
  const base = env.VITE_BASE || '/';
  const siteUrl = (env.VITE_SITE_URL || 'https://tork.lyon.dev').replace(/\/$/, '');
  const ogImage = `${siteUrl}${base.replace(/\/$/, '')}/images/og-image.jpg`;

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
