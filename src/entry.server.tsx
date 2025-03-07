import { type Context } from 'hono';
import React, { StrictMode } from 'react';
import { renderToReadableStream, renderToString } from 'react-dom/server';
import { StaticRouterProvider, createStaticHandler, createStaticRouter } from 'react-router';

import routes from './routes';
import { createFetchRequest } from './routes/request';

const { query, dataRoutes } = createStaticHandler(routes);

export default async function render(c: Context) {
  let fetchRequest = await createFetchRequest(c);
  let context = await query(fetchRequest);
  if (context instanceof Response) {
    throw context;
  }
  let router = createStaticRouter(dataRoutes, context);

  return renderToString(
    <StrictMode>
      <StaticRouterProvider router={router} context={context} nonce="the-nonce" />
    </StrictMode>,
  );
}
