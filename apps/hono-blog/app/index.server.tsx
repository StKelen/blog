import { Hono } from 'hono';
import React, { StrictMode } from 'react';
import { renderToReadableStream } from 'react-dom/server';
import { StaticRouterProvider, createStaticHandler, createStaticRouter } from 'react-router';

import api from './api';
import routes from './routes';
import { createFetchRequest } from './routes/request';

const app = new Hono();

app.route('/api', api);

const { query, dataRoutes } = createStaticHandler(routes);

app.get('/*', async (c) => {
  let fetchRequest = await createFetchRequest(c);
  let context = await query(fetchRequest);
  if (context instanceof Response) {
    throw context;
  }
  let router = createStaticRouter(dataRoutes, context);

  return c.html(
    // @ts-ignore
    renderToReadableStream(
      <StrictMode>
        <StaticRouterProvider router={router} context={context} nonce="the-nonce" />
      </StrictMode>,
    ),
  );
});

export default app;
