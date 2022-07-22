"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.heroRepository = exports.userRepository = void 0;
const User_1 = __importDefault(require("../entities/User"));
const Hero_1 = __importDefault(require("../entities/Hero"));
const userRepository = () => {
    return User_1.default;
};
exports.userRepository = userRepository;
const heroRepository = () => {
    return Hero_1.default;
};
exports.heroRepository = heroRepository;
