import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"
import { UserRepositories } from "../repositories/UserRepositories";

interface IComplimentRequest{
    user_sender: string;
    user_receiver: string;
    tag_id?: string; 
    message: string;    
}

class CreateComplimentService {

    async execute({user_sender, user_receiver, tag_id, message}: IComplimentRequest){
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
        const usersRepository = getCustomRepository(UserRepositories);

        const userRecieverExists = await usersRepository.findOne(user_receiver);

        if(user_sender === user_receiver){
            throw new Error ("The receiving and sending user is the same!");
        }

        if(!userRecieverExists){
            throw new Error ("The receiving user does not exists");
        }

        const compliment = complimentsRepositories.create({
            user_sender,
            user_receiver,
            tag_id,
            message
        })

        await complimentsRepositories.save(compliment);
    }
}

export {CreateComplimentService}