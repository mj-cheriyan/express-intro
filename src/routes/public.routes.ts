import { Router, Request, Response } from 'express';
import { logMiddleware, addRequestTimeMiddleware  } from '../middleware/logging.middleware';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Public Content');
});

router.post('/submit', (req: Request, res: Response) => {
  res.json({ received: req.body });
});

router.post('/chained/info', logMiddleware, addRequestTimeMiddleware, (req: Request, res: Response) => {
  res.json({
    message: "Middleware chaining works!",
    requestedAt: req.requestTime
});
});

export { router as publicRoutes };
