import {Request, Response, NextFunction} from "express"

export function ensureAdmin(request: Request, response: Response, next:NextFunction){
    const {admin} = request.headers; //pegar do JWT o decode e ler se tem o payload de admin

    if(admin){
        return next();
    }

    return response.json({error: "Unauthorired user. It is not an admin"}).status(403);
}