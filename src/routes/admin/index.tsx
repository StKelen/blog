import React from 'react';
import { type RouteObject } from 'react-router';
import AdminCreatePostPage from './post/create';
import AdminLayout from '@/components/layouts/admin-layout';

const routes: RouteObject[] = [
  {
    path: '/',
    Component: AdminLayout,
    children: [
      {
        path: '/post',
        Component: AdminCreatePostPage,
      },
    ],
  },
];

export default routes;
