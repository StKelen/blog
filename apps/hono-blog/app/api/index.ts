import { Hono } from 'hono';
const api = new Hono();

api.get('/test', (c) => c.json({ text: 'nmsl' }));

export default api;
