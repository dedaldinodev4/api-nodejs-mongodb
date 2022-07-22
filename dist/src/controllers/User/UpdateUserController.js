"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserController = void 0;
const UpdateUserService_1 = require("../../services/User/UpdateUserService");
class UpdateUserController {
    async handle(request, response) {
        const { id } = request.params;
        const { name, email, companyName, phone } = request.body;
        const service = new UpdateUserService_1.UpdateUserService();
        const result = await service.execute(id, {
            name, email, companyName, phone
        });
        if (result instanceof Error) {
            response.status(400).json(result.message);
        }
        return response.json(result);
    }
}
exports.UpdateUserController = UpdateUserController;
