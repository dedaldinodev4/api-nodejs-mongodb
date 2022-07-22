"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const Auth_1 = require("./controllers/Auth");
const Hero_1 = require("./controllers/Hero");
const User_1 = require("./controllers/User");
const ensuredAuthenticated_1 = require("./middlewares/ensuredAuthenticated");
const routes = (0, express_1.Router)();
exports.routes = routes;
//* Auth *//
routes.post('/api/auth/login', new Auth_1.LoginController().handle);
routes.post('/api/auth/register', new Auth_1.RegisterController().handle);
//* Heroes Routes *//
routes.post('/api/heroes', (0, ensuredAuthenticated_1.ensuredAuthenticated)(), new Hero_1.CreateHeroController().handle);
routes.get('/api/heroes', new Hero_1.GetAllHeroesController().handle);
routes.get('/api/heroes/:id', new Hero_1.GetOneHeroController().handle);
routes.put('/api/heroes/:id', (0, ensuredAuthenticated_1.ensuredAuthenticated)(), new Hero_1.UpdateHeroController().handle);
routes.delete('/api/heroes/:id', (0, ensuredAuthenticated_1.ensuredAuthenticated)(), new Hero_1.DeleteHeroController().handle);
//* User Routes *//
routes.get('/api/users', new User_1.GetAllUsersController().handle);
routes.get('/api/users/:id', new User_1.GetOneUserController().handle);
routes.put('/api/users/:id', (0, ensuredAuthenticated_1.ensuredAuthenticated)(), new User_1.UpdateUserController().handle);
