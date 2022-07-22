"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensuredAuthenticated = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
//* ensuredAuthenticated *//
const ensuredAuthenticated = () => {
    return async (request, response, next) => {
        const authHeaders = request.headers.authorization;
        if (!authHeaders) {
            return response.status(401).json({ error: 'Token is missing' });
        }
        const [, token] = authHeaders.split(' ');
        try {
            const data = (0, jsonwebtoken_1.verify)(token, process.env.JWT_STRING);
            request.userId = data.id;
            return next();
        }
        catch (err) {
            return response.status(401).json({ error: err });
        }
    };
};
exports.ensuredAuthenticated = ensuredAuthenticated;
