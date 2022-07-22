"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    avatar_url: {
        type: String,
    },
    phone: {
        type: String
    },
    companyName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});
exports.default = (0, mongoose_1.model)('User', UserSchema);
