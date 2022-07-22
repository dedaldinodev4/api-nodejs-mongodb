"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllUsersService = void 0;
const repositories_1 = require("../../repositories");
class GetAllUsersService {
    async execute() {
        const _repository = (0, repositories_1.userRepository)();
        const user = await _repository.find();
        return user;
    }
}
exports.GetAllUsersService = GetAllUsersService;
