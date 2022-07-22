"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const repositories_1 = require("../../repositories");
class LoginService {
    async execute({ email, password }) {
        const _repository = (0, repositories_1.userRepository)();
        const user = await _repository.findOne({ email });
        if (!user) {
            return new Error("User doesn't exists");
        }
        if ((0, bcrypt_1.compareSync)(password, user.password)) {
            const token = jsonwebtoken_1.default.sign({
                id: user._id, email: user.email, name: user.name
            }, process.env.JWT_STRING, {
                expiresIn: "1h"
            });
            return {
                user: {
                    id: user._id,
                    email: user.email,
                    name: user.name,
                    companyName: user.companyName,
                    phone: user.phone
                },
                token
            };
        }
        return new Error("User unauthorized");
    }
}
exports.LoginService = LoginService;
