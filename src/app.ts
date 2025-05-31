import express, { Application } from 'express';
import { adminRoutes } from './routes/admin.routes';
import { publicRoutes } from './routes/public.routes';

const app: Application = express();
app.use(express.json());

app.use('/admin', adminRoutes);
app.use('/public', publicRoutes);

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err);
  res.status(500).json({ message: 'Internal Server Error' });
});

app.listen(8080, () => {
  console.log('Server running on http://localhost:8080');
});
