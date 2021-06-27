import {Request, Response } from "express";
import { ListUserSerivce } from "../services/ListUsersService";


class ListUsersController{
    async handle(request: Request, response: Response){
        const listUserSerivce = new ListUserSerivce();

        const users = await listUserSerivce.execute();
        return response.json(users);
    }
}

export { ListUsersController };