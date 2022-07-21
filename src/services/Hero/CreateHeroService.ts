import { heroRepository } from "../../repositories";
import { IHeroRequest } from "../../dtos/Hero";


export class CreateHeroService {

    async execute ({ name, age, power, team }: IHeroRequest): Promise<IHeroRequest | Error> {


        const _repository = heroRepository();

        const heroExists = await _repository.findOne({ name });

        if (heroExists) {
            return new Error('Hero already exists!');
        }

        const hero = _repository.create({
            name, age, power, team
        });

        return hero;
    }
}