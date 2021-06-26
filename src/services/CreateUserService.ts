import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories"
import { hash } from "bcryptjs";

interface IUserRequest{
    name: string;
    email: string;
    password: string;
    admin?: boolean
}

class CreateUserService {
    async execute({name, email, password, admin=false}: IUserRequest){
        const usersRepository = getCustomRepository(UserRepositories);

        if(!email){
            throw new Error("No email on this request");
        }

        const userAlreadyExists = await usersRepository.findOne({email});

        if (userAlreadyExists){
            throw new Error("User already exists");
        }
            
        
        const passwordHash = await hash(password, 10);

        // Adicionar Bcrypt nessa parte. Não é utilizado mas vou mudar para ficar seguro
        const user = usersRepository.create({
            name,
            email,
            admin,
            password: passwordHash
        })

        await usersRepository.save(user);

        return user;

    }
}

export { CreateUserService}