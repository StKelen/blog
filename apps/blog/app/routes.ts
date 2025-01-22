import { type RouteConfig, index, layout, prefix, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  layout('layouts/admin-layout.tsx', [
    ...prefix('admin', [
      index('routes/admin/index.tsx'),
      ...prefix('post', [route('create', 'routes/admin/post/create.tsx')]),
    ]),
  ]),
] satisfies RouteConfig;
