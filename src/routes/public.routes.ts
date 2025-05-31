import { Router, Request, Response } from 'express';
import { logMiddleware } from '../middleware/logging.middleware';
import { addRequestTimeMiddleware } from '../middleware/addRequestTime.middleware';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Public Content');
});

router.post('/submit', (req: Request, res: Response) => {
  res.json({ received: req.body });
});

router.post('/chained/info', logMiddleware, addRequestTimeMiddleware, (req: Request, res: Response) => {
  res.send({
    message: "Middleware chaining works!",
    requestedAt: `${(req as any)['requestTime']}`
});
});

export { router as publicRoutes };
