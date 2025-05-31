import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Public Content');
});

router.post('/submit', (req: Request, res: Response) => {
  res.json({ received: req.body });
});

export { router as publicRoutes };
