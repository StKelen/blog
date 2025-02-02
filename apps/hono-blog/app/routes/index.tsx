import React from 'react';
import { type RouteObject, useLoaderData, Outlet } from 'react-router';

const routes: RouteObject[] = [
  {
    path: '/',
    loader: () => JSON.stringify({ test: 'root' }),
    Component: () => {
      const data = useLoaderData();
      return (
        <div>
          {data}
          <Outlet />
        </div>
      );
    },
    children: [
      {
        path: '/test',
        loader: () => JSON.stringify({ test: 'text' }),
        Component: () => {
          const data = useLoaderData();
          return <div>{data}</div>;
        },
      },
    ],
  },
];

export default routes;
