"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllHeroesController = void 0;
const Hero_1 = require("../../services/Hero");
class GetAllHeroesController {
    async handle(request, response) {
        const service = new Hero_1.GetAllHeroesService();
        const result = await service.execute();
        if (result instanceof Error) {
            response.status(400).json(result.message);
        }
        return response.json(result);
    }
}
exports.GetAllHeroesController = GetAllHeroesController;
