"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllHeroesService = void 0;
const repositories_1 = require("../../repositories");
class GetAllHeroesService {
    async execute() {
        const _repository = (0, repositories_1.heroRepository)();
        const heroes = await _repository.find();
        return heroes;
    }
}
exports.GetAllHeroesService = GetAllHeroesService;
