import { compareSync } from 'bcrypt';
import jwt from 'jsonwebtoken';
import { userRepository } from '../../repositories';
import { IUserLogin, IUserData} from '../../dtos/User';


export class LoginService {

    async execute ({email, password}: IUserLogin): Promise<IUserData | Error> {
        const _repository = userRepository(); 

        const user = await _repository.findOne({ email }); 

        if (!user) {
            return new Error("User doesn't exists");
        }

       if (compareSync(password, user.password)) {

            const token = jwt.sign({
               id: user._id, email: user.email, name: user.name
                },
                process.env.JWT_STRING,{ 
                expiresIn: "1h"
                }
            );
           
           return {
               user: {
                    id: user._id,
                   email: user.email,
                   name: user.name,
                   companyName: user.companyName,
                   phone: user.phone
               },
               token
           };
       }

       return new Error("User unauthorized");
    }
}