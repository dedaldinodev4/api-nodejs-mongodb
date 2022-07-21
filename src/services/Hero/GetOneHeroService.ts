import { heroRepository } from "../../repositories";
import { IHeroRequest } from "../../dtos/Hero";


export class GetOneHeroService {

    async execute (id: string): Promise<IHeroRequest | Error> {


        const _repository = heroRepository();

        const hero = await _repository.findById(id);

        if (!hero) {
            return new Error("Hero doesn't exists!");
        }

        return hero;
    }
}