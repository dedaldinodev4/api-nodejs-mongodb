"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateHeroService = void 0;
const repositories_1 = require("../../repositories");
class UpdateHeroService {
    async execute(id, { name, age, power, team }) {
        const _repository = (0, repositories_1.heroRepository)();
        const hero = await _repository.findById(id);
        if (!hero) {
            return new Error('Hero does not exists!');
        }
        hero.name = name;
        hero.age = age;
        hero.power = power;
        hero.team = team;
        await hero.save();
        return hero;
    }
}
exports.UpdateHeroService = UpdateHeroService;
