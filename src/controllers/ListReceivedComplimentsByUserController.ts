import {Request, Response} from "express";
import { ListReceivedComplimentsByUserService } from "../services/ListReceivedComplimentsByUserService";

class ListReceivedComplimentsByUserController {
    async handle(request: Request, response: Response){
        const {user_id} = request;
        
        const listReceivedComplimentsByUserService = new ListReceivedComplimentsByUserService();

        const compliments = await listReceivedComplimentsByUserService.execute(user_id);

        return response.json(compliments);
    }
}

export {ListReceivedComplimentsByUserController};