import { heroRepository } from "../../repositories";
import { IHeroRequest } from "../../dtos/Hero";


export class DeleteHeroService {

    async execute (id: string) {

        const _repository = heroRepository();

        if (!(await _repository.findById(id))) {
            return new Error('Hero does not exists!');
        }


        await _repository.findByIdAndDelete(id);
    }
}