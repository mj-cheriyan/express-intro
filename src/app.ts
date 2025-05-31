import express, { Application } from 'express';
import { adminRoutes } from './routes/admin.routes';
import { publicRoutes } from './routes/public.routes';

const app: Application = express();
app.use(express.json());

app.use('/admin', adminRoutes);
app.use('/public', publicRoutes);

app.listen(8080, () => {
  console.log('Server running on http://localhost:8080');
});
