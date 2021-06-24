import {EntityRepository, Repository} from "typeorm";
import {User} from "../entities/User";

@EntityRepository(User)
export class UserRepositories extends Repository<User> {
    //Só estamos usando as funções padroes do Repository. Por isso não criamos nada nesse arquivo.
}
