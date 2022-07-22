"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateHeroController = void 0;
const Hero_1 = require("../../services/Hero");
class UpdateHeroController {
    async handle(request, response) {
        const { id } = request.params;
        const { name, age, power, team } = request.body;
        const service = new Hero_1.UpdateHeroService();
        const result = await service.execute(id, { name, age, power, team });
        if (result instanceof Error) {
            response.status(400).json(result.message);
        }
        return response.json(result);
    }
}
exports.UpdateHeroController = UpdateHeroController;
