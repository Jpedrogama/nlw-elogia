import {Request, Response, NextFunction} from "express";

export function ensureAuth(request: Request, response: Response, next: NextFunction){
    const bearerToken = request.headers.authorization;

    
}