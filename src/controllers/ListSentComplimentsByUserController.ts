import {Request, Response} from "express";
import { ListSentComplimentsByUserService } from "../services/ListSentComplimentsByUserService";

class ListSentComplimentsByUserController {
    async handle(request: Request, response: Response){
        const {user_id} = request;
        
        const listSentComplimentsByUserService = new ListSentComplimentsByUserService();

        const compliments = await listSentComplimentsByUserService.execute(user_id);

        return response.json(compliments);
    }
}

export {ListSentComplimentsByUserController};