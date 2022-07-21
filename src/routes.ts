import { Router } from 'express';

import { LoginController, 
        RegisterController 
} from './controllers/Auth';

import { CreateHeroController,
        GetAllHeroesController,
        GetOneHeroController,
        UpdateHeroController,
        DeleteHeroController
} from './controllers/Hero';

import { 
        GetAllUsersController,
        GetOneUserController,
        UpdateUserController
} from './controllers/User';

import { ensuredAuthenticated } from './middlewares/ensuredAuthenticated';

const routes = Router();


//* Auth *//
routes.post('/api/auth/login', new LoginController().handle);
routes.post('/api/auth/register', new RegisterController().handle);


//* Heroes Routes *//
routes.post('/api/heroes', ensuredAuthenticated(), new CreateHeroController().handle);
routes.get('/api/heroes', new GetAllHeroesController().handle);
routes.get('/api/heroes/:id', new GetOneHeroController().handle);
routes.put('/api/heroes/:id', ensuredAuthenticated(), new UpdateHeroController().handle);
routes.delete('/api/heroes/:id', ensuredAuthenticated(), new DeleteHeroController().handle);

//* User Routes *//
routes.get('/api/users', new GetAllUsersController().handle);
routes.get('/api/users/:id', new GetOneUserController().handle);
routes.put('/api/users/:id', ensuredAuthenticated(), new UpdateUserController().handle);

export { routes }