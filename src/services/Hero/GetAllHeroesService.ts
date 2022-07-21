import { heroRepository } from "../../repositories";
import { IHeroRequest } from "../../dtos/Hero";


export class GetAllHeroesService {

    async execute (){

        const _repository = heroRepository();

        const heroes = await _repository.find();

        return heroes;
    }
}