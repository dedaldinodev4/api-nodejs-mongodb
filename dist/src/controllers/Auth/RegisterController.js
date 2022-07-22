"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterController = void 0;
const RegisterService_1 = require("../../services/Auth/RegisterService");
class RegisterController {
    async handle(request, response) {
        const { email, name, password, companyName, phone } = request.body;
        const service = new RegisterService_1.RegisterService();
        const result = await service.execute({
            name, email, password, companyName, phone
        });
        if (result instanceof Error) {
            response.status(400).json(result.message);
        }
        return response.json(result);
    }
}
exports.RegisterController = RegisterController;
