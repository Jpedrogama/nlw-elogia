import {Request, Response, NextFunction} from "express"
import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";

export async function ensureAdmin(request: Request, response: Response, next:NextFunction){
    const {user_id} = request;

    const usersRepositories = getCustomRepository(UserRepositories);

    const user = await usersRepositories.findOne(user_id);

    if(user.admin){
        return next();
    }

    return response.json({error: "Unauthorired user. It is not an admin"}).status(403);
}