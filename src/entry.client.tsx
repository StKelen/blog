import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, matchRoutes, RouterProvider } from 'react-router';

import routes from './routes';

async function hydrate() {
  // Determine if any of the initial routes are lazy
  let lazyMatches = matchRoutes(routes, window.location)?.filter((m) => m.route.lazy);

  // Load the lazy matches and update the routes before creating your router
  // so we can hydrate the SSR-rendered content synchronously
  if (lazyMatches && lazyMatches?.length > 0) {
    await Promise.all(
      lazyMatches.map(async (m) => {
        let routeModule = await m.route.lazy!();
        Object.assign(m.route, { ...routeModule, lazy: undefined });
      }),
    );
  }

  let router = createBrowserRouter(routes);

  ReactDOM.hydrateRoot(
    document.getElementById('root')!,
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
}

hydrate();
