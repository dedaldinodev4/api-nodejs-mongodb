"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configs = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { APP_PORT, APP_BASEURL, MONGO_DB, MONGO_STRING, MONGO_ATLAS_URL } = process.env;
const configs = {
    variables: {
        app: {
            APP_PORT,
            APP_BASEURL,
        },
        mongo: {
            MONGO_STRING,
            MONGO_DB,
            MONGO_ATLAS_URL,
        }
    }
};
exports.configs = configs;
