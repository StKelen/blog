import path from 'path';
import { defineConfig } from 'vite';
import devServer from '@hono/vite-dev-server';
import build from '@hono/vite-build/cloudflare-pages';
import adapter from '@hono/vite-dev-server/cloudflare';

export default defineConfig({
  plugins: [
    build(),
    devServer({
      adapter,
      entry: 'app/index.server.tsx',
    }),
  ],
  ssr: {
    target: 'webworker',
    resolve: {
      conditions: ['workerd', 'browser'],
      externalConditions: ['edge', 'workerd', 'worker'],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
