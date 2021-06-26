import {Request, Response} from "express";
import { CreateComplimentService } from "../services/CreateComplimentsService"

class CreateComplimentController {

    async handle(request: Request, response: Response){
        const {user_receiver, tag_id, message} = request.body;
        user_sender = '71e2be73-7e45-4f1f-bd36-067dfc67e32f';
        const createComplimentService = new CreateComplimentService();

        await createComplimentService.execute({
            user_sender,
            user_receiver,
            tag_id,
            message
        })

    }
}

export {CreateComplimentController}