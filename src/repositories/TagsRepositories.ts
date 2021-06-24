import { EntityRepository, Repository } from "typeorm";
import { Tag } from "../entities/Tag";

@EntityRepository(Tag)
export class TagsRepositories extends Repository<Tag>{
    //Só estamos usando as funções padroes do Repository. Por isso não criamos nada nesse arquivo.
}