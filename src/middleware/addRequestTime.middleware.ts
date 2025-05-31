import { NextFunction, Request, Response } from "express";

export function addRequestTimeMiddleware(req: Request, res: Response, next: NextFunction){
    (req as any)['requestTime'] = new Date().toISOString();
    next();
}