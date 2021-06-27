import { EntityRepository ,Repository } from "typeorm";
import {Compliment} from "../entities/Compliments";

@EntityRepository(Compliment)
export class ComplimentsRepositories extends Repository<Compliment>{
    // Só vai ter as funções padrões por isso fica em branco
} 