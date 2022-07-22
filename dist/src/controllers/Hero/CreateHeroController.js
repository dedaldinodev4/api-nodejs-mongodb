"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateHeroController = void 0;
const Hero_1 = require("../../services/Hero");
class CreateHeroController {
    async handle(request, response) {
        const { name, age, power, team } = request.body;
        const service = new Hero_1.CreateHeroService();
        const result = await service.execute({ name, age, power, team });
        if (result instanceof Error) {
            response.status(400).json(result.message);
        }
        return response.json(result);
    }
}
exports.CreateHeroController = CreateHeroController;
