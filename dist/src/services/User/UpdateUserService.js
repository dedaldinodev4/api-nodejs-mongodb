"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserService = void 0;
const repositories_1 = require("../../repositories");
class UpdateUserService {
    async execute(id, { name, email, companyName, phone }) {
        const _repository = (0, repositories_1.userRepository)();
        const user = await _repository.findById(id);
        if (!user) {
            return new Error("User doesn't exists!");
        }
        user.name = name;
        user.email = email;
        user.companyName = companyName;
        user.phone = phone;
        await user.save();
        return user;
    }
}
exports.UpdateUserService = UpdateUserService;
