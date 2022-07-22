import { userRepository } from "../../repositories";
import { IUser, IUserRequestUpdateDTO } from "../../dtos/User";


export class UpdateUserService {

    async execute (id, {name, email, companyName, phone }
        : IUserRequestUpdateDTO): Promise<IUser | Error> {


        const _repository = userRepository();

        const user = await _repository.findById(id);

        if (!user) {
            return new Error("User doesn't exists!");
        }

        user.name = name;
        user.email = email;
        user.companyName = companyName;
        user.phone = phone;


        await user.save(); 

        return user;
    }
}