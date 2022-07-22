"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteHeroService = void 0;
const repositories_1 = require("../../repositories");
class DeleteHeroService {
    async execute(id) {
        const _repository = (0, repositories_1.heroRepository)();
        if (!(await _repository.findById(id))) {
            return new Error('Hero does not exists!');
        }
        await _repository.findByIdAndDelete(id);
    }
}
exports.DeleteHeroService = DeleteHeroService;
