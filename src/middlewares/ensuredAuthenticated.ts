import { NextFunction, Request, Response } from 'express';
import { decode, verify } from 'jsonwebtoken';
import { IExpressRequest } from '../dtos/User';

//* ensuredAuthenticated *//

    export const ensuredAuthenticated = () => {
    
        return async (request: IExpressRequest, response: Response, next: NextFunction) => {

            const authHeaders = request.headers.authorization;

            if (!authHeaders) {
                return response.status(401).json({ error: 'Token is missing'});
            }
            const [, token] = authHeaders.split(' ');


            try {
                const data = verify(token, process.env.JWT_STRING) as { id:string; email: string; name: string;};
                
                request.userId = data.id;
                return next();
            } catch (err) {
                return response.status(401).json({ error: err})
            }
        }
        
        
    

    }