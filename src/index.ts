import { Hono } from 'hono';
import api from '@/api';
import { renderHTML } from '@/lib/renderer';
import renderSSR from './entry.server';

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

const app = new Hono();
app.route('/api', api);

app.get('/admin/*', (c) => {
  const url = new URL(c.req.url);
  let extendBody: string;
  if (IS_PRODUCTION) {
    extendBody = `
    <script src="${url.origin}/static/entry.admin.js"></script>
  `.trim();
  } else {
    extendBody = `
    <script type="module">
      import RefreshRuntime from '${url.origin}/@react-refresh'
      RefreshRuntime.injectIntoGlobalHook(window)
      window.$RefreshReg$ = () => {}
      window.$RefreshSig$ = () => (type) => type
      window.__vite_plugin_react_preamble_installed__ = true
    </script>
    <script type="module" src="${url.origin}/@vite/client"></script>
    <script type="module" src="${url.origin}/src/entry.admin.tsx"></script>
  `.trim();
  }
  const html = renderHTML({ extendBody });
  return c.html(html);
});

app.get('/*', async (c, next) => {
  const url = new URL(c.req.url);
  let extendBody: string;
  if (IS_PRODUCTION) {
    extendBody = `
      <script src="${url.origin}/static/entry.client.js"></script>
    `.trim();
  } else {
    extendBody = `
    <script type="module">
      import RefreshRuntime from '${url.origin}/@react-refresh'
      RefreshRuntime.injectIntoGlobalHook(window)
      window.$RefreshReg$ = () => {}
      window.$RefreshSig$ = () => (type) => type
      window.__vite_plugin_react_preamble_installed__ = true
    </script>
    <script type="module" src="${url.origin}/@vite/client"></script>
    <script type="module" src="${url.origin}/src/entry.client.tsx"></script>
  `.trim();
  }
  const content = await renderSSR(c);
  const html = renderHTML({
    content,
    extendBody,
  });
  return c.html(html);
});

export default app;
