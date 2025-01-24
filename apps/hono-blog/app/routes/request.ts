import { Context } from 'hono';

export async function createFetchRequest(c: Context) {
  let origin = `http://${c.req.url}`;
  // Note: This had to take originalUrl into account for presumably vite's proxying
  let url = new URL(c.req.url, origin);

  let headers = new Headers();

  for (let [key, values] of Object.entries(c.req.header())) {
    if (values) {
      if (Array.isArray(values)) {
        for (let value of values) {
          headers.append(key, value);
        }
      } else {
        headers.set(key, values);
      }
    }
  }

  let init: any = {
    method: c.req.method,
    headers,
  };

  if (c.req.method !== 'GET' && c.req.method !== 'HEAD') {
    init.body = await c.req.parseBody();
  }

  return new Request(url.href, init);
}
