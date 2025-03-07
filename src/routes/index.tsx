import React from 'react';
import { type RouteObject, useLoaderData } from 'react-router';
import HomeLayout from '@/components/layouts/home-layout';

const routes: RouteObject[] = [
  {
    path: '/',
    Component: HomeLayout,
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
