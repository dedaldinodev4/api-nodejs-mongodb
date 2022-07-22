"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteHeroController = void 0;
const Hero_1 = require("../../services/Hero");
class DeleteHeroController {
    async handle(request, response) {
        const { id } = request.params;
        const service = new Hero_1.DeleteHeroService();
        const result = await service.execute(id);
        if (result instanceof Error) {
            response.status(400).json(result.message);
        }
        return response.json(result);
    }
}
exports.DeleteHeroController = DeleteHeroController;
