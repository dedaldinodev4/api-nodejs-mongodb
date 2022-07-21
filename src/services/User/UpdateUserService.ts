import { userRepository } from "../../repositories";
import { IUserRequestDTO, IUserRequestUpdateDTO } from "../../dtos/User";


export class UpdateUserService {

    async execute (id, {name, email }
        : IUserRequestUpdateDTO): Promise<IUserRequestDTO | Error> {


        const _repository = userRepository();

        const user = await _repository.findById(id);

        if (!user) {
            return new Error("User doesn't exists!");
        }

        user.name = name;
        user.email = email;

        await user.save(); 

        return user;
    }
}