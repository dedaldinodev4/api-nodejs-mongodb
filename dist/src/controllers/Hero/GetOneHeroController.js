"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOneHeroController = void 0;
const Hero_1 = require("../../services/Hero");
class GetOneHeroController {
    async handle(request, response) {
        const { id } = request.params;
        const service = new Hero_1.GetOneHeroService();
        const result = await service.execute(id);
        if (result instanceof Error) {
            response.status(400).json(result.message);
        }
        return response.json(result);
    }
}
exports.GetOneHeroController = GetOneHeroController;
