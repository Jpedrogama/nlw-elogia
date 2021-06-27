import {Request, Response, NextFunction} from "express";
import {verify} from "jsonwebtoken";

interface IPayLoad{
    sub: string;
    email: string;
}

export function ensureAuth(request: Request, response: Response, next: NextFunction){
    const token = request.headers.authorization;

    if (!token){
        return response.json({error: "Login to access this route"}).status(401);
    }

    const [,bearerToken] = token.split(" ");

    try{
        const {email,sub} = verify(bearerToken, process.env.JWT_SECRET) as IPayLoad;
        request.user_id = sub;
        request.email = email;

        return next();
    }catch(err){
        return response.json({error: "Login to access this route"}).status(401);
    }

}