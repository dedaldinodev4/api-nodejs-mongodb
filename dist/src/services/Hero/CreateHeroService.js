"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateHeroService = void 0;
const repositories_1 = require("../../repositories");
class CreateHeroService {
    async execute({ name, age, power, team }) {
        const _repository = (0, repositories_1.heroRepository)();
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
exports.CreateHeroService = CreateHeroService;
