import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";
import {compare} from "bcryptjs";
import {sign} from "jsonwebtoken";


interface IAuthenticateRequest{
    email: string;
    password: string;
}

class AutheticateUserService{
    async execute({email, password}: IAuthenticateRequest){
        const usersRepository = getCustomRepository(UserRepositories);

        const user = await usersRepository.findOne({email});

        if(!user){
            throw new Error("Email or Password is incorrect");
        }
        
        const checkPassword = await compare( password, user.password);

        if(!checkPassword){
            throw new Error("Email or Password is incorrect");
        }

        const token = sign({
            email: user.email,
            isAdmin: user.admin
        }, "temporario", {
            subject: user.id,
            expiresIn: "1d"

        })
        
        return token;
    }
}

export {AutheticateUserService};