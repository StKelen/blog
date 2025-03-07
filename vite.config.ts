import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, SSRTarget } from 'vite';
import react from '@vitejs/plugin-react-swc';
import devServer from '@hono/vite-dev-server';
import adapter from '@hono/vite-dev-server/cloudflare';

export default defineConfig(({ isSsrBuild }) => ({
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    devServer({
      adapter,
      entry: 'src/index.ts',
      exclude: [
        /.*\.scss$/,
        /.*\.css$/,
        /.*\.ts$/,
        /.*\.tsx$/,
        /^\/@.+$/,
        /\?t\=\d+$/,
        /^\/favicon\.ico$/,
        /^\/static\/.+/,
        /^\/node_modules\/.*/,
      ],
    }),
  ],
  build: {
    target: isSsrBuild ? 'esnext' : 'modules',
    emptyOutDir: !isSsrBuild,
    outDir: isSsrBuild ? 'dist' : 'dist/static',
    copyPublicDir: isSsrBuild,
    rollupOptions: {
      input: isSsrBuild ? 'src/index.ts' : ['src/entry.client.tsx', 'src/entry.admin.tsx'],
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
      '@': path.resolve(__dirname, './src'),
    },
  },
}));
