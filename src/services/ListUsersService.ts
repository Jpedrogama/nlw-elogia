import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";


class ListUserSerivce {
    async execute(){
        const userRepositories = getCustomRepository(UserRepositories);

        const users = await userRepositories.find();

        return users;
    }
}

export { ListUserSerivce };