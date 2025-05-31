import { Router, Request, Response } from 'express';
import { adminAuthMiddleware } from '../middleware/adminAuth.middleware';

const router = Router();

router.get('/dashboard', adminAuthMiddleware, (req: Request, res: Response) => {
  res.send('Welcome, Admin!');
});

export { router as adminRoutes };
