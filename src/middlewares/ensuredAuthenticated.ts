import { NextFunction, Request, Response } from 'express';
import { decode, verify } from 'jsonwebtoken';

//* ensuredAuthenticated *//

    export const ensuredAuthenticated = () => {
    
        return async (request: Request, response: Response, next: NextFunction) => {

            const authHeaders = request.headers.authorization;

            if (!authHeaders) {
                return response.status(401).json({ error: 'Token is missing'});
            }
            const [, token] = authHeaders.split(' ');


            try {
                verify(token, process.env.JWT_KEY);
                
                const { user } = decode(token);
                request.userId = user.id
                return next();
            } catch (err) {
                return response.status(401).json({ error: err})
            }
        }
        
        
    

    }