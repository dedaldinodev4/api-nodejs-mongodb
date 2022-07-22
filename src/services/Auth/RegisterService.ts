import { userRepository } from "../../repositories";
import { IUserRequestDTO, IUser } from "../../dtos/User";
import { hashSync } from 'bcrypt';


export class RegisterService {

    async execute ({ name, email, password, companyName, phone }): Promise<IUser | Error> {


        const _repository = userRepository();

        const userExists = await _repository.findOne({ email });

        if (userExists) {
            return new Error('User already exists!');
        }

        const hash = hashSync(password, 10);

        const user = _repository.create({
            name,
            email,
            companyName, 
            phone,
            password: hash
        });

        return user;
    }
}