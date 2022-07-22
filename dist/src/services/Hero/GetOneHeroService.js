"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOneHeroService = void 0;
const repositories_1 = require("../../repositories");
class GetOneHeroService {
    async execute(id) {
        const _repository = (0, repositories_1.heroRepository)();
        const hero = await _repository.findById(id);
        if (!hero) {
            return new Error("Hero doesn't exists!");
        }
        return hero;
    }
}
exports.GetOneHeroService = GetOneHeroService;
