import {Request, Response} from "express";

export class AutheticateUserController {
    async handle(request: Request, response:Response){
        const {email, password} = request.body;
        
        const authenticateUserService = new AutheticateUserService();

        const token = await authenticateUserService.execute({})
    }
}