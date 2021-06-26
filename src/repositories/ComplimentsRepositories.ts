import { Repository } from "typeorm";
import {Compliment} from "../entities/Compliments";

class ComplimentsRepositories extends Repository<Compliment>{
    // Só vai ter as funções padrões por isso fica em branco
}

export {ComplimentsRepositories}