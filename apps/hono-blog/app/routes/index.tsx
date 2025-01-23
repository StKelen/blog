import React from 'react';
import { Hono } from 'hono';
import { Route, Routes, StaticRouter } from 'react-router';
import { renderToReadableStream } from 'react-dom/server.edge';

const routes = new Hono();

routes.get('*', (c) => {
  return c.html(
    renderToReadableStream(
      <StaticRouter location={c.req.path}>
        <Routes>
          <Route path="/" element={<span>base</span>} />
          <Route path="/about" element={<span>about</span>} />
        </Routes>
      </StaticRouter>,
    ),
  );
});

export default routes;
