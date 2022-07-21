import { heroRepository } from "../../repositories";
import { IHeroRequest, IHeroUpdateRequest } from "../../dtos/Hero";
 

export class UpdateHeroService {

    async execute (id, {name, age, power, team }: IHeroUpdateRequest): Promise<IHeroRequest | Error> {


        const _repository = heroRepository();

        const hero = await _repository.findById(id);

        if (!hero) {
            return new Error('Hero does not exists!');
        }

        hero.name   = name;
        hero.age    = age;
        hero.power  = power;
        hero.team   = team;

        await hero.save();

        return hero;
    }
}