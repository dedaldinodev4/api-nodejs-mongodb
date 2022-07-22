"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const HeroSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
    },
    power: {
        type: String
    },
    team: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});
exports.default = (0, mongoose_1.model)('Hero', HeroSchema);
