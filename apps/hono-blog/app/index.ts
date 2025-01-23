import { Hono } from 'hono';

import api from './api';
import routes from './routes';

const app = new Hono();
app.route('/api', api);
app.route('/', routes);

export default app;
