"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllUsersController = void 0;
const GetAllUsersService_1 = require("../../services/User/GetAllUsersService");
class GetAllUsersController {
    async handle(request, response) {
        const service = new GetAllUsersService_1.GetAllUsersService();
        const result = await service.execute();
        if (result instanceof Error) {
            response.status(400).json(result.message);
        }
        return response.json(result);
    }
}
exports.GetAllUsersController = GetAllUsersController;
