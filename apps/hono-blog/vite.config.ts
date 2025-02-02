import path from 'path';
import { defineConfig, SSRTarget } from 'vite';
import react from '@vitejs/plugin-react-swc';
import devServer from '@hono/vite-dev-server';
import adapter from '@hono/vite-dev-server/cloudflare';

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [
    react(),
    devServer({
      adapter,
      entry: 'app/index.ts',
    }),
  ],
  build: {
    target: isSsrBuild ? 'esnext' : 'modules',
    emptyOutDir: !isSsrBuild,
    outDir: isSsrBuild ? 'dist' : 'dist/static',
    copyPublicDir: isSsrBuild,
    rollupOptions: {
      input: isSsrBuild ? 'app/index.ts' : 'app/entry.client.tsx',
      output: {
        entryFileNames: isSsrBuild ? '_worker.js' : undefined,
      },
    },
  },
  ssr: {
    target: 'webworker' as SSRTarget,
    resolve: {
      conditions: ['workerd', 'browser'],
      externalConditions: ['edge', 'workerd', 'worker'],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './app'),
    },
  },
}));
