"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterService = void 0;
const repositories_1 = require("../../repositories");
const bcrypt_1 = require("bcrypt");
class RegisterService {
    async execute({ name, email, password, companyName, phone }) {
        const _repository = (0, repositories_1.userRepository)();
        const userExists = await _repository.findOne({ email });
        if (userExists) {
            return new Error('User already exists!');
        }
        const hash = (0, bcrypt_1.hashSync)(password, 10);
        const user = _repository.create({
            name,
            email,
            companyName,
            phone,
            password: hash
        });
        return user;
    }
}
exports.RegisterService = RegisterService;
