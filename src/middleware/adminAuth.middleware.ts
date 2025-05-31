import { Request, Response, NextFunction } from 'express';

export function adminAuthMiddleware(req: Request, res: Response, next: NextFunction): void {
  const token = req.headers['x-admin-token'];

  if (token !== 'secret123') {
    res.status(403).json({ message: 'Forbidden: Admins only' });
    return;
  }

  next();
}
