import { Request, Response, NextFunction } from 'express';

export function adminAuthMiddleware(req: Request, res: Response, next: NextFunction): void {
  const isAdmin = req.headers['x-admin-token'] === 'secret123';
  if (!isAdmin) {
    res.status(403).json({ message: 'Forbidden: Admins only' });
    return;
  }
  next();
}
