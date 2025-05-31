import { NextFunction, Request, Response } from "express";

export function logMiddleware(req: Request, res: Response, next: NextFunction){
    console.log(`${req.method} ${req.url}`);
    next();
}

export function addRequestTimeMiddleware(req: Request, res: Response, next: NextFunction){
    req.requestTime = new Date().toISOString();
    next();
}