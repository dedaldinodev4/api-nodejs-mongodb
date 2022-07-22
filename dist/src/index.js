"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const configs_1 = require("./configs");
dotenv_1.default.config();
const { MONGO_ATLAS_URL } = configs_1.configs.variables.mongo;
mongoose_1.default.connect(`${MONGO_ATLAS_URL}`)
    .then(res => console.log('Database connected.'))
    .catch(err => console.log(err));
server_1.server.listen(process.env.PORT, () => {
    console.log(`Server is running`);
});
